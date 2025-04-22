import { useState, useEffect } from 'react';
import Book from '../../components/Book';
import useData from '../../useHooks/useData';
import { BiChevronDown } from 'react-icons/bi';

const YourComponent = () => {
    const [isMobile, setIsMobile] = useState(false);
    // const [isDrawerOpen, setIsDrawerOpen] = useState(!isMobile);

    const {books} = useData()
    const [openCategory, setOpenCategory] = useState(true)
    const [openRating, setOpenRating] = useState(true)
    const [openLanguage, setOpenLanguage] = useState(true)

    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([])

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c!==category) : [...prev,category])
    }
    const handleRatingChange = (rating) => {
        setSelectedRatings(prev =>
            prev.includes(rating)
                ? prev.filter(r => r !== rating)
                : [...prev, rating]
        );
    };
    const handleLanguageChange = (language) => {
        setSelectedLanguages(prev => prev.includes(language)? prev.filter(l => l !==language) : [...prev, language])
    }

    const filteredBooks = (books || []).filter(book => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(book.category);
        const ratingMatch = selectedRatings.length === 0 || selectedRatings.some(rating => book.rating >= parseFloat(rating));
        const languageMatch = selectedLanguages.length === 0 || selectedLanguages.includes(book.language);
        return categoryMatch && ratingMatch && languageMatch;
    });
    
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // You can adjust breakpoint
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // useEffect(() => {
    //     setIsDrawerOpen(!isMobile);
    //   }, [isMobile]);
      

    

    return (
        <div className='mt-[76px] pt-6'>
            <div className="drawer lg:drawer-open">
            <input 
                id="my-drawer" 
                type="checkbox" 
                className="drawer-toggle"
                // checked={isDrawerOpen}
                // onChange={(e) => setIsDrawerOpen(e.target.checked)}
                />
                <div className="drawer-content flex flex-col">
                    {/* Only show button on mobile */}
                    {isMobile && (
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button self-start m-4 ml-auto">
                            Open drawer
                        </label>
                    )}

                    {/* Books list */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4">
                        {
                            filteredBooks?.map((book, index) => (
                                <Book key={index} book={book} />
                            ))
                        }
                    </div>
                </div>
                
                <div className="drawer-side" >
                    <label htmlFor="my-drawer"  className=" drawer-overlay" aria-label='close sidebar'>
                    </label>
                    {/* sidebar content  */}
                    <div className='min-h-screen p-4 w-[290px] bg-white mt-[76px] md:mt-0'>

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">Filter</h2>
                            <button className="text-sm text-blue-600 hover:underline">
                            Clear All
                            </button>
                        </div>

                        <div className='mt-6'>
                            <div onClick={() => setOpenCategory(!openCategory)} className='cursor-pointer mb-2'>
                                <div className='flex justify-between'>
                                    <h3>Category</h3>
                                    <BiChevronDown size={24} className={`transition-transform duration-300 ${openCategory? 'rotate-0': '-rotate-90'}`}></BiChevronDown>
                                </div>
                            </div>
                            {
                                openCategory && (
                                    <div className="flex flex-col gap-2 pl-2">
                                    <label className="flex items-center gap-2">
                                    <input 
                                    type="checkbox" 
                                    className="checkbox checkbox-sm"
                                    onChange={() => handleCategoryChange('Academic')}
                                    /> Academic
                                    </label>
                                    <label className="flex items-center gap-2">
                                    <input type="checkbox" className="checkbox checkbox-sm"
                                        onChange={() => handleCategoryChange('Technology')}
                                    /> Technology
                                    </label>
                                    <label className="flex items-center gap-2">
                                    <input type="checkbox" className="checkbox checkbox-sm"
                                        onChange={() => handleCategoryChange('Business')}
                                    /> Business
                                    </label>
                                </div>
                                )
                            }
                        </div>
                        <div className='mt-6'>
                            <div onClick={() => setOpenRating(!openRating)} className='cursor-pointer mb-2'>
                                <div className='flex justify-between'>
                                    <h3>Rating</h3>
                                    <BiChevronDown size={24} className={`transition-transform duration-300 ${openRating? 'rotate-0': '-rotate-90'}`}></BiChevronDown>
                                </div>
                            </div>
                            {
                                openRating && (
                                    <div className="flex flex-col gap-2 pl-2">
                                    <label className="flex items-center gap-2">
                                    <input 
                                    type="checkbox" 
                                    className="checkbox checkbox-sm"
                                    onChange={() => handleRatingChange(3.0)}
                                    />3.0 & above
                                    </label>
                                    <label className="flex items-center gap-2">
                                    <input type="checkbox" className="checkbox checkbox-sm"
                                    onChange={() => handleRatingChange(3.5)}
                                    /> 3.5 & above
                                    </label>
                                    <label className="flex items-center gap-2">
                                    <input type="checkbox" className="checkbox checkbox-sm"
                                    onChange={() => handleRatingChange(4.0)}
                                    />4.0 & above
                                    </label>
                                </div>
                                )
                            }
                        </div>
                        <div className='mt-6'>
                            <div onClick={() => setOpenLanguage(!openLanguage)} className='cursor-pointer mb-2'>
                                <div className='flex justify-between'>
                                    <h3>Language</h3>
                                    <BiChevronDown size={24} className={`transition-transform duration-300 ${openLanguage? 'rotate-0': '-rotate-90'}`}></BiChevronDown>
                                </div>
                            </div>
                            {
                                openLanguage && (
                                    <div className="flex flex-col gap-2 pl-2">
                                    <label className="flex items-center gap-2">
                                    <input 
                                    type="checkbox" 
                                    className="checkbox checkbox-sm"
                                    onChange={() => handleLanguageChange("English")}
                                    /> English
                                    </label>
                                    <label className="flex items-center gap-2">
                                    <input type="checkbox" className="checkbox checkbox-sm"
                                    onChange={() => handleLanguageChange("English")}
                                    /> Bangla
                                    </label>
                                </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourComponent;
