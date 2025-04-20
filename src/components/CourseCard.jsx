import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { BsWatch } from 'react-icons/bs';
import { FiWatch } from 'react-icons/fi';
import { GiNetworkBars, GiWatch } from 'react-icons/gi';
import { HiOutlineDocument } from 'react-icons/hi';
import { IoTimeOutline } from 'react-icons/io5';
import { TiMediaEject } from 'react-icons/ti';

const CourseCard = ({thumbnail, title, description, videos, hours, lessons, fees, rating,instructor, lectures,level, layout }) => {

    // const [newRating, setNewRating] = useState(Math.round(rating));
    
    return (
        <div className={layout === "grid" ? 'max-w-[290px] w-full bg-white rounded-xl' : 'max-w-[918px] w-full shadow bg-white rounded-lg flex'}>
            {
                layout === 'grid' ? <>
                            <div className="relative">
                            <img className="rounded-t-xl w-full h-[181.75px] object-cover" src={thumbnail} alt="" />
                            
                            <p className="absolute top-2 left-2 bg-sky-500 text-white text-xs md:text-sm font-semibold px-2 py-1 rounded">
                                {level}
                            </p>
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
                </> : <>
                <div>
                <img className='rounded-l-xl h-[255px] w-[440px]' src={thumbnail} alt="" />
                </div>
                <div className='p-4 w-full flex flex-col justify-between'>
                    <div className=''>
                        <h1 className='text-lg font-semibold truncate'>{title}</h1>
                        <div className='flex justify-between w-[200px]'>
                            <div className='flex items-center gap-1'>
                                <IoTimeOutline></IoTimeOutline>
                                <p>{hours} hours</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <GiNetworkBars></GiNetworkBars>
                                <p>{level}</p>
                            </div>
                        </div>
                        <div className='flex max-w-[400px] gap-4'>
                            <div className='flex gap-2 '>
                                <div className='rating rating-sm'>
                                <input type="radio" name={`rating-${title}`} className="mask mask-star-2 bg-orange-400" aria-label="1 star"
                                checked={rating >=1}
                                />
                                </div>
                                <h1 className='text-base font-bold'>{rating}</h1>
                            </div>
                            <div className='flex items-center gap-1'>
                                <HiOutlineDocument></HiOutlineDocument>
                                <p>{lectures} lectures</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>{description}</h1>
                    </div>

                    <div className='text-sm flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-1'>
                            <BiUser></BiUser>
                            <p>{instructor}</p>
                            </div>
                            <h1 className='text-sky-500'>{fees} TK</h1>
                        </div>
                    </div>
                </div>
                </>
            }
            
        </div>
    );
};

export default CourseCard;