import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosPublic from '../../useHooks/useAxiosPublic';
import { useParams } from 'react-router-dom';
import { FaBoxOpen, FaCheckCircle, FaPaperPlane, FaStar, FaVideo } from 'react-icons/fa';

const BookDetails = () => {
    const axiosPublic = useAxiosPublic()
    const {id} = useParams()
    const [activeTab, setActiveTab] = useState("tab1")

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [review, setReview] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Rating:", rating);
        console.log("Review:", review);
        // You can post to backend here
        setReview("");
        setRating(0);
      };


    const {data: book, isLoading: BookDetailsLoading, error} = useQuery({
        queryKey: ['course', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/books/${id}`);
            return res.data;
        },
        enabled: !!id
    })

    const {title, bookImage, price, author, copy, details} = book || {};

    const handleTab = (tabId) => {
        setActiveTab(tabId);
      };
    
    return (
        <div className='mt-[76px] py-12'>
            {BookDetailsLoading ? (<p>Loading....</p>) : error? (<p>Something went wrong!</p>) : (
                <div className='grid grid-cols-4 gap-8'>
                    {/* left content  */}
                    <div className='max-w-[300px] w-full max-h-[450px] h-full hover:scale-105 duration-300 shadow-xl shadow-black sticky top-24'>
                        <img className='h-full' src={bookImage} alt="" />
                    </div>
                    {/* middle content  */}
                    <div className='col-span-2'>
                        <div>
                            <h1 className='text-2xl font-bold'>{title}</h1>
                            <p className='text-base mt-2'>by {author}</p>
                        </div>
                        <div className='mt-6'>
                            <p className='text-xl font-bold'>TK {price}</p>
                            <p className='text-sm mt-1'>Hard copy price : {price + price}</p>
                        </div>
                        <div className='flex items-start gap-6 py-12'>
                    <div className=''>
                        {/* name of each tab group should be unique */}
                        <div className="tabs">
                            {/* Details */}
                            <input
                            type="radio"
                            name="my_tabs_2"
                            className={`tab mb-6 ${activeTab === "tab1" ? "border-b-2 border-sky-600 text-sky-600" : ""}`}
                            aria-label="Details"
                            onClick={() => handleTab("tab1")}
                            checked={activeTab === "tab1"}
                            readOnly
                            />
                            <div className="tab-content border-base-300 bg-base-100 py-10 rounded-xl px-4">
                            {activeTab === "tab1" && 
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='text-2xl font-bold'>Description</h1>
                                    <p className='text-sm'>{details} This book is famous for learnign Technology.</p>
                                </div>
                            </div>}
                            </div>

                            {/* Author */}
                            <input
                            type="radio"
                            name="my_tabs_2"
                            className={`tab ${activeTab === "tab3" ? "border-b-2 border-sky-600 text-sky-600" : ""}`}
                            aria-label="Author"
                            onClick={() => handleTab("tab3")}
                            checked={activeTab === "tab3"}
                            readOnly
                            />
                            <div className="tab-content border-base-300 bg-base-100 py-10 px-6 rounded-xl">
                            {activeTab === "tab3" && 
                            <div className=' flex flex-col gap-6'>
                                <div className="flex gap-6">
                                    <div className="w-24 rounded-full">
                                        <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-[23px] font-bold'>{author}</h1>
                                        <p className='cla
                                        text-[14px] font-normal'>CSE</p>
                                    </div>
                                </div>
                            </div>}
                            </div>

                            {/* Reviews & Ratings  */}
                            <input
                            type="radio"
                            name="my_tabs_2"
                            className={`tab ${activeTab === "tab4" ? "border-b-2 border-sky-600 text-sky-600" : ""}`}
                            aria-label="Reviews & Ratings"
                            onClick={() => handleTab("tab4")}
                            checked={activeTab === "tab4"}
                            readOnly
                            />
                            <div className="tab-content border-base-300 bg-base-100 p-10">
                            {activeTab === "tab4" && 
                            <div>
                                <div>
                                    <h1 className='text-[20px] font-bold'>Reviews</h1>
                                    <p className='text-sm text-slate-400'>Total reviews: 0 | Rating: 5.0</p>
                                </div>
                                <div className='border mt-6 mb-6'></div>
                                {/* comment form  */}
                                <div className=" mx-auto p-6 bg-gray-100 rounded-md shadow-md">
                                    <h3 className="text-lg font-semibold mb-4">Add Your Review</h3>
                                    
                                    <div className="flex items-center mb-4 space-x-1 text-yellow-400">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar
                                            key={star}
                                            className={`cursor-pointer transition ${
                                            (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                                            }`}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            onClick={() => setRating(star)}
                                        />
                                        ))}
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <textarea
                                        className="w-full border rounded-md p-3 mb-4 resize-none"
                                        placeholder="Write your review..."
                                        rows={4}
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        required
                                        />

                                        <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition"
                                        >
                                        <FaPaperPlane />
                                        Submit Review
                                        </button>
                                    </form>
                                </div>
                                {/* end comment form  */}
                                <div className='mt-6'>
                                <h1 className='text-[20px] font-semibold'>All Reviews</h1>
                                <div className="flex flex-col items-center justify-center h-64 text-center p-4">
                                <FaBoxOpen className="w-12 h-12 text-gray-500 mb-4" />
                                <h2 className="text-lg font-semibold text-gray-800">No Reviews Yet</h2>
                                <p className="text-sm text-gray-500">Be the first to share your experience!</p>
                                </div>
                                </div>
                            </div>}
                            </div>
                        </div>

                    </div>
                    {/* end left content */}
                </div>
                    </div>
                    {/* right content  */}
                    <div className="md:block">
                        <div className="sticky top-24 border max-w-[272px] text-white p-2 text-center rounded-lg">
                            <div className='w-[254.4px] h-[192px] bg-slate-200 py-3 relative'>
                            <p className='text-green-500 absolute bottom-2 left-2'>✓ {copy}</p>
                            <img src={book.bookImage} alt="" className='h-full w-[106.66px] mx-auto shadow-lg shadow-slate-700' />
                            </div>
                            <h1 className='text-left text-base text-black font-semibold mb-6 mt-2'>{title}</h1>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between'>
                                    <h1 className='text-xl font-bold text-sky-500'>TK {price}</h1>
                                    <p className='font-bold text-sky-500'>Read Demo</p>
                                </div>
                                <div className='flex justify-between'>
                                    <div className="rating rating-xs gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <input
                                                key={star}
                                                type="radio"
                                                name={`rating-${title}`} // Unique name for each book
                                                className="mask mask-star-2 bg-amber-300"
                                                aria-label={`${star} star`}
                                                // checked={newRating === star} // Ensure the rating is checked properly
                                                // onChange={() => setNewRating(star)} // Update the rating when changed
                                            />
                                        ))}
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col gap-2 mt-6'>
                                    <button className='btn w-full flex border-slate-300 justify-between rounded-xl'>Buy Soft Copy Only <span>TK {price}</span></button>
                                    <button className='btn bg-sky-500 w-full flex justify-between rounded-xl'>Buy hard Copy <span>TK {price}</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookDetails;