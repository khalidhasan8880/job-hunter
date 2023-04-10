import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <header className='px-56'>
            <nav className='flex justify-between my-4 '>
                <h2>Job-Hunter</h2>
                <ul className='flex gap-x-5'>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics">Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/applied-job">Applied Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                </ul>

                <button>Start Applying</button>
            </nav>
            {/* nav end */}
            
        </header>
    );
};

export default Header;