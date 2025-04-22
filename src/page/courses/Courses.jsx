
import { LuLayoutGrid, LuLayoutList } from 'react-icons/lu';
import CourseCard from '../../components/CourseCard';
import { BiChevronDown } from 'react-icons/bi';
import { useState } from 'react';
import useData from '../../useHooks/useData';

const Courses = () => {
  // const [courses, setCourses] = useState([]);
  const {courses} = useData()
  const [layout, setLayout] = useState("grid");

  const [openCategory, setOpenCategory] = useState(true);
  const [openLevel, setOpenLevel] = useState(true);
  const [openSubject, setOpenSubject] = useState(true);
  const [openLanguage, setOpenLanguage] = useState(true);
  const [openClass, setOpenClass] = useState(true);

  // store by filter 
  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c!==category) : [...prev, category]
    )
  }

  const filteredCourses = selectedCategories?.length === 0 ? courses || [] : (courses || []).filter(course => selectedCategories.includes(course.category))

  return (
    <div className="drawer lg:drawer-open pt-6 mt-[76px]">
      {/* Drawer toggle */}
      <input id="filter-drawer" type="checkbox" className="drawer-toggle" />

      {/* Drawer content (Main Content Area) */}
      <div className="drawer-content flex flex-col gap-4 sm:gap-6 lg:gap-10  w-full max-w-[918px] ml-auto">
        {/* Top bar with Layout and Filter button */}
        <div className="flex justify-between">
          {/* Layout Switcher */}
          <div className="flex justify-between w-full">
            <div className="flex">
              <div
                onClick={() => setLayout('grid')}
                className={layout === 'grid' ? 'w-12 h-12 bg-sky-500 flex items-center text-white justify-center rounded-l-xl' : 'w-12 h-12 hover:bg-sky-200 flex justify-center items-center bg-white rounded-l-xl'}
              >
                <LuLayoutGrid className='text-2xl' />
              </div>
              <div
                onClick={() => setLayout('list')}
                className={layout === 'list' ? 'w-12 h-12 bg-sky-500 flex items-center justify-center rounded-r-xl' : 'w-12 h-12 hover:bg-sky-200 flex justify-center bg-white items-center rounded-r-xl'}
              >
                <LuLayoutList className='text-2xl' />
              </div>
            </div>
              <select defaultValue="Pick a Framework" className="select select-info outline-none  focus:ring-0 focus:outline-none ">
              <option disabled={true}>Release Date</option>
              <option>Release Date (newest first)</option>
              <option>Release Date (oldest first)</option>
            </select>
          </div>

          {/* Filter Button (mobile only) */}
          <label htmlFor="filter-drawer" className="btn bg-sky-500 md:hidden">
            Filter
          </label>
        </div>

        {/* Courses Grid/List */}
        <div className={layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => <CourseCard key={course.id} {...course} layout={layout} />)
          ) : (
            <p className="col-span-3 text-center text-gray-500">No courses found.</p>
          )}
        </div>
      </div>

      {/* Drawer Sidebar (Filter Panel) */}
      <div className="drawer-side">
        {/* overlay */}
        <label htmlFor="filter-drawer" className="drawer-overlay"></label>

        {/* Sidebar content */}
        <div className="min-h-screen p-4 bg-white mt-[76px] md:mt-0 w-[290px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Filter</h2>
            <button className="text-sm text-blue-600 hover:underline">
              Clear All
            </button>
          </div>

          {/* All Filters */}
          {/* Category Filter */}
          <div className="mb-6">
            <div
              className="flex items-center justify-between mb-2 cursor-pointer"
              onClick={() => setOpenCategory(!openCategory)}
            >
              <h3 className="font-semibold">Category</h3>
              <BiChevronDown size={26} className={`transition-transform duration-300 ${openCategory ? "rotate-0" : "-rotate-90"}`} />
            </div>
            {openCategory && (
              <div className="flex flex-col gap-2 pl-2">
                <label className="flex items-center gap-2">
                  <input 
                  type="checkbox" 
                  className="checkbox checkbox-sm"
                  onChange={() => handleCategoryChange('Academic')}
                  checked = {selectedCategories.includes('Academic')}
                   /> Academic
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" 
                    onChange={() => handleCategoryChange('Technology')}
                    checked = {selectedCategories.includes('Technology')}
                  /> Technology
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" 
                  onChange={() => handleCategoryChange('Business')}
                  checked = {selectedCategories.includes('Business')}
                  /> Business
                </label>
              </div>
            )}
          </div>

          {/* Level Filter */}
          <div className="mb-6">
            <div
              className="flex items-center justify-between mb-2 cursor-pointer"
              onClick={() => setOpenLevel(!openLevel)}
            >
              <h3 className="font-semibold">Level</h3>
              <BiChevronDown size={26} className={`transition-transform duration-300 ${openLevel ? "rotate-0" : "-rotate-90"}`} />
            </div>
            {openLevel && (
              <div className="flex flex-col gap-2 pl-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" /> Beginner
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" /> Intermediate
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" /> Advanced
                </label>
              </div>
            )}
          </div>

          {/* Subject Filter */}
          <div className="mb-6">
            <div
              className="flex items-center justify-between mb-2 cursor-pointer"
              onClick={() => setOpenSubject(!openSubject)}
            >
              <h3 className="font-semibold">Subject</h3>
              <BiChevronDown size={26} className={`transition-transform duration-300 ${openSubject ? "rotate-0" : "-rotate-90"}`} />
            </div>
            {openSubject && (
              <div className="flex flex-col gap-2 pl-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" /> Physics
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" /> Chemistry
                </label>
              </div>
            )}
          </div>

          {/* Language Filter */}
          <div className="mb-6">
            <div
              className="flex items-center justify-between mb-2 cursor-pointer"
              onClick={() => setOpenLanguage(!openLanguage)}
            >
              <h3 className="font-semibold">Language</h3>
              <BiChevronDown size={26} className={`transition-transform duration-300 ${openLanguage ? "rotate-0" : "-rotate-90"}`} />
            </div>
            {openLanguage && (
              <div className="flex flex-col gap-2 pl-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" /> English
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" /> Bangla
                </label>
              </div>
            )}
          </div>

          {/* Class Filter */}
          <div className='mb-6'>
            <div
              className="flex items-center justify-between mb-2 cursor-pointer"
              onClick={() => setOpenClass(!openClass)}
            >
              <h3 className="font-semibold">Class</h3>
              <BiChevronDown size={26} className={`transition-transform duration-300 ${openClass ? "rotate-0" : "-rotate-90"}`} />
            </div>
            {openClass && (
              <div className="flex flex-col gap-2 pl-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" /> class 11-12
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" /> versity
                </label>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Courses;
