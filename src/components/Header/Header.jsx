import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='md:flex justify-between items-center my-1 mb-56 absolute mx-auto px-44 md:px-6 w-full'>
            <h2 className='text-3xl font-bold'>Job-Hunter</h2>
            <ul className='flex flex-wrap gap-y-8 gap-x-2  md:gap-x-5 my-9 text-xl font-semibold text-center'>
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
        </nav>
    );
};

export default Header;