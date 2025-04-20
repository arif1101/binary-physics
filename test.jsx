import React, { useEffect, useState } from 'react';
import { LuLayoutGrid, LuLayoutList } from 'react-icons/lu';
import CourseCard from '../../components/CourseCard';
import { BiChevronDown } from 'react-icons/bi';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [layout, setLayout] = useState("grid")

    const [openCategory, setOpenCategory] = useState(true);
    const [openLevel, setOpenLevel] = useState(true);
    const [openSubject, setOpenSubject] = useState(true)
    const [openLanguage, setOpenLanguage] = useState(true)
    const [openClass, setOpenClass] = useState(true)

    useEffect(() => {
      fetch("/courses.json")
        .then((response) => response.json())
        .then((data) => setCourses(data))
        .catch((error) => console.error("Error fetching courses:", error));
    }, []);
    return (
        <div className="p-6 mt-[76px] flex gap-4 sm:gap-6 lg:gap-10 drawer md:drawer-open">
          {/* start Filter  */}
          <div className="w-full max-w-[306px] bg-white p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Filter</h2>
              <button className="text-sm text-blue-600 hover:underline">
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <div
                className="flex items-center justify-between mb-2 cursor-pointer"
                onClick={() => setOpenCategory(!openCategory)}
              >
                <h3 className="font-semibold">Category</h3>
                <BiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openCategory ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </div>
              {openCategory && (
                <div className="flex flex-col gap-2 pl-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Academic
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Technology
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Business
                  </label>
                </div>
              )}
            </div>

            {/* Level Filter */}
            <div className='mb-6'>
              <div
                className="flex items-center justify-between mb-2 cursor-pointer"
                onClick={() => setOpenLevel(!openLevel)}
              >
                <h3 className="font-semibold">Level</h3>
                <BiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openLevel ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </div>
              {openLevel && (
                <div className="flex flex-col gap-2 pl-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Beginner
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Intermediate
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Advanced
                  </label>
                </div>
              )}
            </div>

            {/* subject filter  */}
            <div className='mb-6'>
              <div
                className="flex items-center justify-between mb-2 cursor-pointer"
                onClick={() => setOpenSubject(!openSubject)}
              >
                <h3 className="font-semibold">Subject</h3>
                <BiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openSubject ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </div>
              {openSubject && (
                <div className="flex flex-col gap-2 pl-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Beginner
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Intermediate
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Advanced
                  </label>
                </div>
              )}
            </div>
            
            {/* Language filter  */}
            <div className='mb-6'>
              <div
                className="flex items-center justify-between mb-2 cursor-pointer"
                onClick={() => setOpenLanguage(!openLanguage)}
              >
                <h3 className="font-semibold">Language</h3>
                <BiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openLanguage ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </div>
              {openLanguage && (
                <div className="flex flex-col gap-2 pl-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Beginner
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Intermediate
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Advanced
                  </label>
                </div>
              )}
            </div>

            {/* class filter  */}
            <div className=''>
              <div
                className="flex items-center justify-between mb-2 cursor-pointer"
                onClick={() => setOpenClass(!openClass)}
              >
                <h3 className="font-semibold">Class</h3>
                <BiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openClass ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </div>
              {openClass && (
                <div className="flex flex-col gap-2 pl-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Beginner
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Intermediate
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    Advanced
                  </label>
                </div>
              )}
            </div>

          </div>
          {/* end Filter  */}

          {/* start content  */}
          <div className='flex flex-col gap-4 sm:gap-6 lg:gap-10'>
            <div className='flex justify-between'>
              {/* start layout  */}
              <div className='flex'>
                  <div className='flex'>
                      <div onClick={() => setLayout('grid')} className={layout==='grid' ? 'w-12 h-12 bg-sky-500 flex items-center text-white justify-center rounded-l-xl' : 'w-12 h-12 hover:bg-sky-200 flex justify-center items-center bg-white rounded-l-xl'}>
                      <LuLayoutGrid className='text-2xl'></LuLayoutGrid>
                      </div>
                      <div onClick={() => setLayout('list')} className={layout==='list' ? 'w-12 h-12 bg-sky-500 flex items-center justify-center rounded-r-xl' : 'w-12 h-12 hover:bg-sky-200 flex justify-center bg-white items-center rounded-r-xl'}>
                      <LuLayoutList className='text-2xl'></LuLayoutList>
                      </div>
                  </div>
              </div>
              {/* end layout  */}

              {/* filter button  */}
              <label
              htmlFor="filter-drawer" 
              className="btn bg-sky-500 md:hidden">
                Filter
              </label>

            </div>
          
          {/* Courses Grid/list */}
          <div className={layout==='grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
            {courses.length > 0 ? (
              courses.map((course) => <CourseCard key={course.id} {...course} layout={layout} />)
            ) : (
              <p className="col-span-3 text-center text-gray-500">No courses found.</p>
            )}
          </div>
          {/* end Courses Grid/list */}
          </div>
      </div>
    );
};

export default Courses;