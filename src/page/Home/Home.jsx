import React from 'react';
// import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import FindCourse from './FindCourse';
import PopularTopics from './PopularTopics';
import Courses from '../../components/Courses';
import Mentors from './Mentors';
import LearningResources from './LearningResources';
import Testimonials from './Testimonials';
import FeatureSection from './FeatureSection';
import PopularBooks from './PopularBooks';


const Home = () => {
    return (
        <div className='py-[172px]'>
            {/* hero section */}
            <div className='flex gap-5'>
                {/* description section  */}
                <div className='max-w-[618px] pr-6 flex flex-col gap-4'>
                    <h1 className='text-[72px] font-bold leading-none'><span className='text-sky-500'>Learn</span> the Skills of Tomorrow</h1>

                    <p className='text-base text-[#434343] '>Creation timelines for the standard lorem ipsum passage vary, with some citing the 15th century and others the 20th. Creation timelines for the standard lorem ipsum passage vary, with some citing the 15th century and others the 20th.</p>

                    <div className='flex gap-8'>
                        <div className='flex items-center justify-center gap-1 w-[160.56px] bg-sky-500 text-white text-[16px] font-medium h-11 rounded-3xl hover:bg-sky-600'>
                            <button>Join For Free</button>
                            <MdArrowRightAlt className='text-[26px] mt-1'></MdArrowRightAlt>
                        </div>
                        <div className='flex text-base font-bold w-[247.4px] h-[44px] items-center justify-between'>
                            <FaPlay className='w-11 h-11 bg-sky-500 text-white p-2 rounded-full'></FaPlay>
                            <p>Learn About CustomLMS</p>
                        </div>
                    </div>
                </div>
                {/* video section  */}
                <div className="flex max-w-[618px] gap-[40px]">
                    <video 
                        className="rounded-b-full w-[289px] object-cover max-h-[426px]" 
                        src="/hero2.mp4" 
                        autoPlay
                        loop
                        muted 
                        playsInline 
                        disablePictureInPicture 
                        onContextMenu={(e) => e.preventDefault()} 
                    ></video>
                    <video 
                        className="rounded-t-full w-[289px] object-cover max-h-[426px]" 
                        src="/hero1.mp4" 
                        autoPlay
                        loop
                        muted 
                        playsInline 
                        disablePictureInPicture 
                        onContextMenu={(e) => e.preventDefault()} 
                    ></video>
                </div>
            </div>
            {/* end hero section  */}

            <FindCourse></FindCourse>

            <PopularTopics></PopularTopics>

            <Courses></Courses>

            <Mentors></Mentors>

            <FeatureSection></FeatureSection>

            <PopularBooks></PopularBooks>

            <LearningResources></LearningResources>

            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;