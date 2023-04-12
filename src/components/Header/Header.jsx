import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const Header = () => {
    const [open, setOpen] = useState(false)
    const navHandler = () => {
        setOpen(!open)
    }
    return (
        <nav className='flex justify-between flex-wrap items-center my-1 mb-56 absolute md:mx-auto md:px-32 px-6 w-full'>
            <h2 className='text-3xl font-bold'>Job-Hunter</h2>
            <ul className='hidden lg:flex flex-wrap gap-x-5 my-4 text-xl font-semibold text-center'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/statistics">Statistics</NavLink>
                </li>
                <li>
                    <NavLink active to="/applied-job"><button>Applied Jobs</button></NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </ul>
            <button className='btn-primary font-semibold'>Start Applying</button>
            <button onClick={navHandler} className='bg-red-300 text-white text-3xl lg:hidden'>{open ? <XMarkIcon className='w-6 h-6 text-sky-300'></XMarkIcon> : <Bars3Icon className='w-6 h-6 text-sky-300'></Bars3Icon>}</button>
            <div className={`${open? '': 'hidden'} lg:hidden absolute top-20 bg-cyan-500 rounded-md px-3 py-7`}>
                <ul className='text-xl flex flex-col gap-y-10 font-semibold text-center'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics">Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink active to="/applied-job"><button>Applied Jobs</button></NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;