import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
    
    const {logo, _id, name, job_category, engineer_title,} = job
    return (
        <div className='grid md:grid-cols-6'>
            <div className='bg-red-100 md:col-span-4'>
                <h1>description</h1>
            </div>
            <div className='bg-sky-100 md:col-span-2'>
                <h1>card</h1>
            </div>
        </div>
    );
};

export default JobDetails;