import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col h-screen '>
            <h4 className='text-6xl font-bold my-7'>Error </h4>
            <p className='text-2xl font-semibold'>Page Not Found !!!</p>
            <h4 className='text-6xl font-bold my-7'>404</h4>
            <Link to={'/'}><button className='btn-primary'>Go Home</button> </Link>
        </div>
    );
};

export default PageNotFound;