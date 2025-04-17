import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const {register, handleSubmit,reset} = useForm()
    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    
    return (
        <div className='flex'>
            <div className='w-6/12'>
            <form className='flex flex-col max-w-[384px] w-full mx-auto min-h-screen justify-center p-6 gap-5'  onSubmit={handleSubmit(onSubmit)}>
                <div className=''>
                    <img className='w-[130px] mx-auto' src="/logo.png" alt="" />
                    <h2 className='text-2xl text-center font-semibold'>Sign in to your Account</h2>
                    <p className='text-base text-center mt-5'>Use your email to log in to your account</p>
                </div>
                
                <div className='flex flex-col gap-7'>
                {/* email  */}
                <div>
                <label className='fieldset-label'><span className='text-red-500'>*</span> Email</label>
                <input {...register("email")} type="email" className='input outline-none w-full' placeholder='Email' />
                </div>
                {/* password  */}
                <div>
                <label className='fieldset-label'><span className='text-red-500'>*</span>Password</label>
                <input {...register("password")} type="password" className='input outline-none w-full' placeholder='Password' />
                </div>
                </div>

                <div className='flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <div className='flex items-center justify-center gap-2'>
                    <input type="checkbox" defaultChecked className="w-4 h-4 " />
                    <p>Remember me</p>
                    </div>
                    <p className='text-sky-500'>Forgot Password</p>
                </div>
                
                <button type="submit" className="bg-sky-500 text-white py-2 rounded hover:bg-sky-600">
                Login
                </button>
                <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100"
                >
                <img src="/google.png" alt="Google" className="w-5 h-5" />
                <span>Login with Google</span>
                </button>
                <p className='mx-auto'>Create an account <Link to='/register'><span className='text-sky-500'>Sign up</span></Link></p>
                </div>

            </form>

            </div>
            <img className='h-screen w-6/12' src="/loginImage.jpg" alt="" />
        </div>
    );
};

export default Login;