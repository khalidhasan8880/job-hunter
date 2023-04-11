import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='md:flex justify-between items-center my-1  absolute mx-auto px-2 md:px-44 w-full'>
            <h2 className='text-3xl font-bold'>Job-Hunter</h2>
            <ul className='flex gap-x-5 my-9 text-xl font-semibold'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/statistics">Statistics</NavLink>
                </li>
                <li>
                    <NavLink active to="/applied-job">Applied Jobs</NavLink>
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