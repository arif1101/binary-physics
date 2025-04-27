import React, { useContext } from 'react';
import { CiEdit } from 'react-icons/ci';
import AuthContext from '../../context/AuthContext';
import { BiUser, BiUserCheck } from 'react-icons/bi';
import { MdEmail, MdMobileFriendly } from 'react-icons/md';
import { CgCalendar } from 'react-icons/cg';
import { FaUserSecret } from 'react-icons/fa';

const Profile = () => {

    const {user} = useContext(AuthContext)
    console.log(user)
    
    return (
        <div className='mt-[76px] py-12 px-6'>
            <div className='shadow p-6 rounded-xl'>
            <div className='flex justify-between mb-6'>
                <h1 className='text-2xl font-bold text-sky-500'>Profile</h1>
                <button className='btn flex text-lg'>
                    <CiEdit></CiEdit>
                    <p>complete profile</p>
                </button>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-1 p-6 rounded-xl bg-white'>
                    <img src="/thum-1.jpg" className='mx-auto w-[138px] h-[138px] rounded-full' alt="" />
                    <div className='flex flex-col gap-4'>
                        <div className='flex shadow items-center gap-4 py-4 px-4 rounded-xl'>
                            <BiUser className='text-xl'></BiUser>
                            <div>
                                <p className='text-xs'>Name</p>
                                <h3>Arifur Rahman</h3>
                            </div>
                        </div>
                        <div className='flex shadow items-center gap-4 py-4 px-4 rounded-xl'>
                            <MdEmail></MdEmail>
                            <div>
                                <p>Email</p>
                                <h3>arifurRahmanarif223@gmail.com</h3>
                            </div>
                        </div>
                        <div className='flex shadow items-center gap-4 py-4 px-4 rounded-xl'>
                            <CgCalendar></CgCalendar>
                            <div>
                                <p>member Since</p>
                                <h3>Arifur Rahman</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 bg-white rounded-xl p-6'>
                    <div className='flex justify-between mb-4'>
                        <div className='flex items-center gap-2 text-lg font-bold'>
                            <BiUserCheck className='text-[28px]'></BiUserCheck>
                            <h3>Profile Details</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                        <progress className="progress progress-info w-56" value="100" max="100"></progress>
                        <p>0%</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex gap-2 items-center'>
                            <MdMobileFriendly className='text-[20px]'></MdMobileFriendly>
                            <h3>Mobile: -</h3>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MdMobileFriendly className='text-[20px]'></MdMobileFriendly>
                            <h3>Institute: -</h3>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MdMobileFriendly className='text-[20px]'></MdMobileFriendly>
                            <h3>WhatsApp: -</h3>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MdMobileFriendly className='text-[20px]'></MdMobileFriendly>
                            <h3>Academic Level: -</h3>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MdMobileFriendly className='text-[20px]'></MdMobileFriendly>
                            <h3>Medium: -</h3>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MdMobileFriendly className='text-[20px]'></MdMobileFriendly>
                            <h3>Date of Birth: -</h3>
                        </div>
                    </div>
                    <div className='border mt-4 mb-4'></div>
                    <div className='flex gap-4 flex-col'>
                        <div className='flex items-center gap-2'>
                            <FaUserSecret className='text-[20px]'></FaUserSecret>
                            <h3>Fateher's Name : -</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaUserSecret className='text-[20px]'></FaUserSecret>
                            <h3>Mother's Name : -</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaUserSecret className='text-[20px]'></FaUserSecret>
                            <h3> Description : -</h3>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;