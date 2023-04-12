import React from 'react';
import man from '../../assets/All Images/man.png'
const Banner = () => {
    return (
        <div className='grid sm:grid-cols-2 md:px-44 pt-56 md:pt-44 px-2'>
            <div className='md:flex justify-center items-center flex-col'>
                <h2 className='xl:title text-5xl font-bold'>One Step Closer To Your <br /><span className='dream-job text-transparent bg-clip-text'>Dream Job</span> </h2>
                <p className='description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button> </button>
            </div>
            <div>
                <img className='w-full' src={man} alt="" />
            </div>
        </div>
    );
};

export default Banner;