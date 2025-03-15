import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdArrowRightAlt } from 'react-icons/md';
import Book from '../../components/Book';

const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10" onClick={onClick}>
        <FaChevronRight size={24} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10" onClick={onClick}>
        <FaChevronLeft size={24} />
    </div>
);

const PopularBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/books.json")
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error("Error fetching books:", error));
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="relative mt-[150px] mb-[150px]">
            <div className='flex justify-between mb-6'>
                <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Discover <span className='text-sky-500'>Popular</span> Books
                </h2>
                <div className='flex items-center justify-center gap-3 w-[120px] bg-sky-500 text-white text-[16px] font-medium h-11 rounded-xl hover:bg-sky-600'>
                    <button>View All</button>
                    <MdArrowRightAlt className='text-[26px] mt-1' />
                </div>
            </div>

            <Slider {...settings}>
                {books.map((book, index) => (
                    <Book key={index} book={book}></Book>
                ))}
            </Slider>
        </div>
    );
};

export default PopularBooks;
