import React from 'react';
// import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import FindCourse from './FindCourse';
import PopularTopics from './PopularTopics';
import Mentors from './Mentors';
import LearningResources from './LearningResources';
import Testimonials from './Testimonials';
import FeatureSection from './FeatureSection';
import PopularBooks from './PopularBooks';
import PopularCourses from './PopularCourses';


const Home = () => {
    return (
        <div className='py-[172px]'>
            {/* hero section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 px-4">
            {/* description section  */}
            <div className="w-full lg:max-w-[618px] pr-0 lg:pr-6 flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-[36px] md:text-[48px] lg:text-[72px] font-bold leading-tight">
            <span className="text-sky-500">Learn</span> the Skills of Tomorrow
            </h1>

            <p className="text-sm md:text-base text-[#434343]">
            Creation timelines for the standard lorem ipsum passage vary, with some citing the 15th century and others the 20th. Creation timelines for the standard lorem ipsum passage vary, with some citing the 15th century and others the 20th.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center lg:justify-start">
            <div className="flex items-center justify-center gap-1 w-full sm:w-[160.56px] bg-sky-500 text-white text-[16px] font-medium h-11 rounded-3xl hover:bg-sky-600">
                <button>Join For Free</button>
                <MdArrowRightAlt className="text-[26px] mt-1" />
            </div>
            <div className="flex text-base font-bold w-full sm:w-[247.4px] h-[44px] items-center justify-between">
                <FaPlay className="w-11 h-11 bg-sky-500 text-white p-2 rounded-full" />
                <p>Learn About CustomLMS</p>
            </div>
            </div>
            </div>

  {/* video section  */}
  <div className="relative flex flex-col sm:flex-row max-w-full lg:max-w-[618px] gap-6 items-center justify-center">
    {/* First Video */}
    <video
      className="rounded-b-full w-[250px] md:w-[289px] object-cover max-h-[426px] z-10"
      src="/hero2.mp4"
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      onContextMenu={(e) => e.preventDefault()}
    ></video>

    {/* Second Video */}
    <video
      className="rounded-t-full w-[250px] md:w-[289px] object-cover max-h-[426px] z-10"
      src="/hero1.mp4"
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      onContextMenu={(e) => e.preventDefault()}
    ></video>

    {/* First SVG - Positioned Top Right */}
    <img
      src="/hero-spinner2.svg"
      alt="Top Right SVG"
      className="absolute top-[-80px] md:right-[-80px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover animate-spin duration-100"
    />

    {/* Second SVG - Positioned Bottom Left */}
    <img
      src="/hero-spinner1.svg"
      alt="Bottom Left SVG"
      className="absolute bottom-[-80px] left-[-80px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover animate-pulse"
    />
  </div>
</div>

            {/* end hero section  */}

            <FindCourse></FindCourse>

            <PopularTopics></PopularTopics>

            <PopularCourses></PopularCourses>

            <Mentors></Mentors>

            <FeatureSection></FeatureSection>

            <PopularBooks></PopularBooks>

            <LearningResources></LearningResources>

            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;