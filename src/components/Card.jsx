import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoDocumentOutline } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";

const Card = ({ image, title, details, videos, hours, lessons, fees, rating }) => {

  const [newRating, setNewRating] = useState(rating)
    return (
        <div className="max-w-sm rounded-2xl shadow-lg bg-white p-4 dark:bg-black">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
        <div className="mt-4">
          <div className="flex items-center gap-3 text-lg text-sky-500">
          <div className="rating rating-xs gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <input
              key={star}
              type="radio"
              name={`rating-${title}`} // 🔹 Unique name for each Card component
              className="mask mask-star-2 bg-amber-300"
              aria-label={`${star} star`}
              checked={newRating === star}
              onChange={() => setNewRating(star)} // 🔹 Updates state correctly
            />
          ))}
          
        </div>
        <span>{rating}</span>
          </div>
          
          <h2 className="text-2xl font-semibold truncate mt-2 min-h-[2.5em]">{title}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 min-h-[2.5em] mb-5">{details}</p>
          <div className="flex justify-between items-center mt-3 text-base">
            <div className="flex gap-2 items-center">
            <FaRegCirclePlay className="text-2xl text-sky-500"/>
            <span>{videos} videos</span>
            </div>
            <div>|</div>
            <div className="flex gap-2 items-center">
            <FaRegClock className="text-2xl text-sky-500"/>
            <span>{hours} hours</span>
            </div>
            <div>|</div>
            <div className="flex gap-2 items-center">
            <IoDocumentOutline className="text-2xl text-sky-500"/>
            <span>{lessons} lessons</span>
            </div>
          </div>
          <div className="w-full border border-sky-500 mt-4"></div>
          <div className="flex justify-between items-center mt-4">
            <div className='flex items-center justify-center w-[140.81px] bg-sky-500 text-white text-[16px] font-medium h-11 rounded-3xl hover:bg-sky-600'>
                <button>Enroll Now</button>
                <MdArrowRightAlt className='text-[26px] mt-1'></MdArrowRightAlt>
            </div>
            <span className="text-base border border-black px-3 py-2 rounded-full">{fees} tk</span>
          </div>
        </div>
      </div>
    );
};

export default Card;