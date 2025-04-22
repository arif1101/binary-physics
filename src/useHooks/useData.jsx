import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useData = () => {
    const axiosPublic = useAxiosPublic()

    const {data: courses = [], isPending: isCourseesLoading, refetch: refetchCourses} = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const res = await axiosPublic.get('/courses')
            return res.data;
        }
    });

    const {data: books = [], isPending: isBooksLoading, refetch: refetchBooks} = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axiosPublic.get('/books');
            return res.data;
        }
    });
    
    return {
        courses,
        books,
        isCourseesLoading,
        isBooksLoading,
        refetchBooks,
        refetchCourses
    } 
};

export default useData;