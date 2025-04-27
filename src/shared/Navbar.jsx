import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import AuthContext from '../context/AuthContext';
import { GrSettingsOption } from 'react-icons/gr';
import { FiShoppingCart } from 'react-icons/fi';
import { ImProfile } from 'react-icons/im';
import { PiBooksLight } from 'react-icons/pi';
import { FaRegFileVideo } from 'react-icons/fa';

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById('profile-drawer');
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        closeDrawer(); // close after logout
      })
      .catch(() => {});
  };

  // Theme control
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // All navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Books", path: "/books" },
    { name: "Exams", path: "/exams" },
    { name: "Forum", path: "/forum" },
    { name: "Resources", path: "/resources" },
    { name: "Blogs", path: "/blogs" },
  ];

  const renderLinks = navLinks.map((link, index) => (
    <NavLink 
      key={index}
      to={link.path}
      className={({ isActive }) => 
        `${isActive ? 'border-b-2 border-sky-600 text-sky-500' : ''}`
      }
      onClick={closeDrawer}
    >
      <li>{link.name}</li>
    </NavLink>
  ));

  return (
    <div className="w-screen shadow max-h-[76px] fixed top-0 left-0 z-50  ">
      <div className="navbar max-w-[1256px] h-full mx-auto">
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {renderLinks}
            </ul>
          </div>
          {/* Logo */}
          <img className='w-[112px] h-[70px] my-auto flex items-center justify-center' src="/logo.png" alt="Logo" />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex text-[14px] dark:text-[#F9FAFB] gap-[32px] font-medium">
            {renderLinks}
          </ul>
        </div>

        <div className="navbar-end flex gap-[16px]">
          {user ? (
            <>
              {/* Profile drawer */}
              <div className="drawer drawer-end z-50">
                <input id="profile-drawer" type="checkbox" className="drawer-toggle" />
                <div className="flex gap-2 drawer-content justify-end">
                  <div className="flex items-center gap-2 border py-1 px-2 rounded-full bg-slate-300">
                    <label htmlFor="profile-drawer" className="btn btn-ghost btn-circle avatar border border-red-700">
                      <div className="w-10 rounded-full">
                        <img alt="Profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </label>
                    <div className="font-bold dark:text-black">
                      <h1>Arifur</h1>
                    </div>
                  </div>
                </div>

                <div className="drawer-side">
                  <label htmlFor="profile-drawer" className="drawer-overlay"></label>
                  <div className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
                    <div className=''>
                      <h3 className="text-base font-bold">{user.email}</h3>
                      <Link to="/my-profile" onClick={closeDrawer}>
                        <p className="text-xs text-sky-500">View Profile</p>
                      </Link>
                    </div>
                    <div className='mt-4 flex flex-col gap-4'>
                      <Link to='/dashboard'>
                        <div onClick={closeDrawer} className='flex items-center gap-4 text-base'>
                          <GrSettingsOption></GrSettingsOption>
                          <h3>Dashboard</h3>
                        </div>
                      </Link>
                      <Link>
                        <div onClick={closeDrawer} className='flex items-center gap-4 text-base'>
                          <FiShoppingCart></FiShoppingCart>
                          <NavLink to='/cart'><h3>Cart</h3></NavLink>
                        </div>
                      </Link>
                      <Link to='/my-profile'>
                        <div onClick={closeDrawer} className='flex items-center gap-4 text-base'>
                          <ImProfile></ImProfile>
                          <h3>My Profile</h3>
                        </div>
                      </Link>
                      <Link>
                          <div onClick={closeDrawer} className='flex items-center gap-4 text-base'>
                            <FaRegFileVideo></FaRegFileVideo>
                            <h3>Enrolled Courses</h3>
                          </div>
                      </Link>
                      <Link>
                        <div onClick={closeDrawer} className='flex items-center gap-4 text-base'>
                          <PiBooksLight></PiBooksLight>
                          <h3 className='font-semibold'>Purchase Books</h3>
                        </div>
                      </Link>
                      <NavLink className='text-red-500' onClick={handleLogout}>Logout</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Login button */}
              <Link to="/login">
                <div className="w-[84.74px] h-[32px] bg-sky-500 flex hover:bg-sky-600 cursor-pointer text-white font-medium items-center justify-center rounded-full pl-2">
                  <p>Login</p>
                  <MdKeyboardArrowRight className="text-xl" />
                </div>
              </Link>
            </>
          )}

          {/* Theme toggle */}
          <label className="swap swap-rotate  rounded-full p-1">
            {/* This hidden checkbox controls the theme */}
            <input 
              type="checkbox" 
              className="theme-controller"
              onChange={handleTheme}
            />
            {/* Sun icon for light theme */}
            <svg
              className="swap-off h-[30px] w-[30px] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Moon icon for dark theme */}
            <svg
              className="swap-on h-[30px] w-[30px] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
