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
            <div className=''>
                <h2 className='title'>One Step Closer To Your <br /><span className='dream-job text-transparent bg-clip-text'>Dream Job</span> </h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button></button>
            </div>
        </header>
    );
};

export default Header;