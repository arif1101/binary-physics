import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { BsWatch } from 'react-icons/bs';
import { FiWatch } from 'react-icons/fi';
import { GiWatch } from 'react-icons/gi';
import { HiOutlineDocument } from 'react-icons/hi';
import { IoTimeOutline } from 'react-icons/io5';
import { TiMediaEject } from 'react-icons/ti';

const CourseCard = ({thumbnail, title, description, videos, hours, lessons, fees, rating,instructor, lectures, layout }) => {

    // const [newRating, setNewRating] = useState(Math.round(rating));
    
    return (
        <div className='max-w-[290px] w-full bg-white rounded-xl'>
            <div>
                <img className='rounded-t-xl h-[181.75px]' src={thumbnail} alt="" />
            </div>
            <div className='p-4'>
                <h1 className='mb-2 md:mb-6 text-lg font-semibold truncate'>{title}</h1>
                <div className='text-sm flex flex-col gap-2'>
                    <div className='flex items-center gap-1'>
                        <BiUser></BiUser>
                        <p>{instructor}</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-1'>
                            <IoTimeOutline></IoTimeOutline>
                            <p>{hours} hours</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <HiOutlineDocument></HiOutlineDocument>
                            <p>{lectures} lectures</p>
                        </div>
                    </div>
                     <div className='flex justify-between'>
                        <div className='flex gap-2'>
                        <div className='rating rating-sm'>
                        <input type="radio" name={`rating-${title}`} className="mask mask-star-2 bg-orange-400" aria-label="1 star"
                        checked={rating >=1}
                        />
                        </div>
                        <h1 className='text-base font-bold'>{rating}</h1>
                        </div>
                        <h1 className='text-sky-500'>{fees} TK</h1>
                     </div>
                </div>
            </div>
            
        </div>
    );
};

export default CourseCard;