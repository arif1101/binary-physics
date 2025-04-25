import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../useHooks/useAxiosPublic';
import { FiUsers } from 'react-icons/fi';
import { FaBoxOpen, FaCheckCircle, FaClock, FaPaperPlane, FaPlay, FaPlayCircle, FaRegClock, FaStar, FaVideo } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { MdAccessTime } from 'react-icons/md';

const CourseDetails = () => {
    const axiosPublic = useAxiosPublic()
    const {id} = useParams()
    const [activeTab, setActiveTab] = useState("tab1");

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [review, setReview] = useState("");

    const [showModal, setShowModal] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Rating:", rating);
      console.log("Review:", review);
      // You can post to backend here
      setReview("");
      setRating(0);
    };

    const {data: course, isLoading:courseDetailsLoading, error}= useQuery({
        queryKey: ['course', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/courses/${id}`);
            return res.data;
        },
        enabled: !!id,
    })

    const { title } = course || {};

    const handleTab = (tabId) => {
      setActiveTab(tabId);
    };
    
    return (
        <div className='mt-[76px] pt-6'>
        {courseDetailsLoading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>Something went wrong!</p>
        ) : (
            <div className=''>
                <div>
                    <h1 className='text-4xl font-bold mb-4'>{title}</h1>
                    <div className='flex gap-6 mb-6'>
                        <div className='flex items-center gap-2'>
                            <FiUsers></FiUsers>
                            <h3>8 student enroll</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                             <FaRegClock></FaRegClock>
                             <h3>Last update 4/23/2025</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                            <GiNetworkBars></GiNetworkBars>
                            <h3>beginer</h3>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 rounded-full">
                            <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                        <div className=''>
                            <h1 className='text-[16px] font-bold'>Arif</h1>
                            <p className='cla
                            text-[14px] font-normal'>Instructor</p>
                        </div>
                    </div>

                </div>

                <div className='flex items-start gap-6 py-12'>
                    {/* left content  */}
                    <div className='w-2/3'>
                        {/* name of each tab group should be unique */}
                        <div className="tabs">
                            {/* overview */}
                            <input
                            type="radio"
                            name="my_tabs_2"
                            className={`tab mb-6 ${activeTab === "tab1" ? "border-b-2 border-sky-600 text-sky-600" : ""}`}
                            aria-label="Overview"
                            onClick={() => handleTab("tab1")}
                            checked={activeTab === "tab1"}
                            readOnly
                            />
                            <div className="tab-content border-base-300 bg-base-100 py-10 rounded-xl px-4">
                            {activeTab === "tab1" && 
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='text-2xl font-bold'>Description</h1>
                                    <p className='text-sm'>গো প্রোগ্রামিং ভাষার বুনিয়াদি থেকে শুরু করে অ্যাডভান্সড বিষয়গুলি শিখুন বাংলায়। এই কোর্সটি নতুন এবং অভিজ্ঞ প্রোগ্রামারদের জন্য উপযোগী।</p>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='text-xl font-semibold'>What you'll learn</h1>
                                    <div className='grid grid-cols-2 text-sm gap-2'>
                                        <p>বাংলা ভাষায় গো প্রোগ্রামিং শেখার সুবিধা</p>
                                        <p>
                                        গো এর অ্যাডভান্সড বিষয় শেখার সুযোগ</p>
                                        <p>কোর্স শেষে সার্টিফিকেট প্রদান</p>
                                        <p>কোডিংয়ের হাতে-কলমে অভিজ্ঞতা</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 text-sm'>
                                    <h1 className='text-xl font-semibold'>Requirements</h1>
                                    <div className='flex flex-col gap-2'>
                                    <p>কম্পিউটার ব্যবহার করার সাধারণ জ্ঞান</p>
                                    <p>প্রোগ্রামিং শেখার আগ্রহ</p>
                                    <p>কোন প্রোগ্রামিং ভাষার প্রাথমিক ধারণা (অপশনাল)</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='text-xl font-semibold'>This course includes</h1>
                                    <div className='grid grid-cols-2 text-sm gap-2'>
                                        <p>৩.৫+ ঘন্টার ভিডিও লেকচার</p>
                                        <p>
                                        ১০টি প্রাকটিক্যাল কোডিং প্রজেক্ট</p>
                                        <p>কোর্স শেষে সার্টিফিকেট</p>
                                        <p>ডাউনলোডযোগ্য রিসোর্স</p>
                                    </div>
                                </div>
                            </div>}
                            </div>

                            {/* Curriculum  */}
                            <input
                            type="radio"
                            name="my_tabs_2"
                            className={`tab ${activeTab === "tab2" ? "border-b-2 border-sky-600 text-sky-600" : ""}`}
                            aria-label="Curriculum"
                            onClick={() => handleTab("tab2")}
                            checked={activeTab === "tab2"}
                            readOnly
                            />
                            <div className="tab-content border-base-300 bg-base-100 p-10">
                            {activeTab === "tab2" && "Tab content 2"}
                            </div>

                            {/* Instructor */}
                            <input
                            type="radio"
                            name="my_tabs_2"
                            className={`tab ${activeTab === "tab3" ? "border-b-2 border-sky-600 text-sky-600" : ""}`}
                            aria-label="Instructor"
                            onClick={() => handleTab("tab3")}
                            checked={activeTab === "tab3"}
                            readOnly
                            />
                            <div className="tab-content border-base-300 bg-base-100 py-10 px-4">
                            {activeTab === "tab3" && 
                            <div className=' flex flex-col gap-6'>
                                <div className="flex gap-6">
                                    <div className="w-24 rounded-full">
                                        <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-[23px] font-bold'>Arif</h1>
                                        <p className='cla
                                        text-[14px] font-normal'>CSE</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-24 rounded-full">
                                        <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-[23px] font-bold'>Arif</h1>
                                        <p className='cla
                                        text-[14px] font-normal'>CSE</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-24 rounded-full">
                                        <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-[23px] font-bold'>Arif</h1>
                                        <p className='cla
                                        text-[14px] font-normal'>CSE</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-24 rounded-full">
                                        <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-[23px] font-bold'>Arif</h1>
                                        <p className='cla
                                        text-[14px] font-normal'>CSE</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-24 rounded-full">
                                        <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-[23px] font-bold'>Arif</h1>
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

                    {/* right content  */}
                    <div className='w-1/3 sticky top-6 shadow-md overflow-hidden bg-white rounded-xl p-6'>
                        <div className="relative h-48 flex items-center justify-center cursor-pointer bg-[url('/thum-1.jpg')]"
                        onClick={() => setShowModal(true)}>
                            {/* add here youtube video. when i click to play it open with a modal and play in modal */}
                            <FaPlay className='text-white text-4xl z-10'></FaPlay>
                            <div className='absolute inset-0 rounded-lg'></div>

                        </div>
                        <div className="mt-6">
                            <div className="text-2xl font-semibold mb-6">৳200.00</div>
                            <button className="btn bg-sky-500 w-full mb-4">Enroll Now</button>
                            <div className="space-y-2 text-base font-semibold text-gray-700">
                                <div className="flex items-center gap-2">
                                    <MdAccessTime className="w-4 h-4" />
                                    <span>29.58 hours on-demand video</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaVideo className="w-4 h-4" />
                                    <span>44 lectures</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCheckCircle className="w-4 h-4" />
                                    <span>Certificate of completion</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
                    <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 right-2 text-xl font-bold"
                    >
                    &times;
                    </button>
                    <div className="aspect-video w-full">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>
                </div>
            )}
                    {/* end right content */}
                </div>

            </div>
        )}
        </div>
    );
};

export default CourseDetails;