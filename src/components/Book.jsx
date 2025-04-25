import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {_id, rating, title, price, copy } = book;
    const [newRating, setNewRating] = useState(rating);

    return (
        <Link to={`/books/${_id}`}>
        <div className="">
            <div className="border max-w-[272px] text-white p-2 text-center rounded-lg">
                <div className='w-[254.4px] h-[192px] bg-slate-200 py-3'>
                <img src={book.bookImage} alt="" className='h-full w-[106.66px] mx-auto shadow-lg shadow-slate-700' />
                </div>
                <h1 className='text-left text-base text-black font-semibold mb-5 mt-2'>{title}</h1>
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
                                    checked={newRating === star} // Ensure the rating is checked properly
                                    onChange={() => setNewRating(star)} // Update the rating when changed
                                />
                            ))}
                        </div>
                        <p className='text-green-500'>✓ {copy}</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;
