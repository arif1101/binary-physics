import React, { useEffect, useState } from 'react';
import { LuLayoutGrid, LuLayoutList } from 'react-icons/lu';
import CourseCard from '../../components/CourseCard';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [layout, setLayout] = useState("grid")

    useEffect(() => {
      fetch("/courses.json")
        .then((response) => response.json())
        .then((data) => setCourses(data))
        .catch((error) => console.error("Error fetching courses:", error));
    }, []);
    return (
        <div className="p-6 mt-[76px] flex flex-col gap-4 sm:gap-6 lg:gap-10">
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
        
        {/* Courses Grid */}
        <div className={layout==='grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
          {courses.length > 0 ? (
            courses.map((course) => <CourseCard key={course.id} {...course} layout={layout} />)
          ) : (
            <p className="col-span-3 text-center text-gray-500">No courses found.</p>
          )}
        </div>
      </div>
    );
};

export default Courses;