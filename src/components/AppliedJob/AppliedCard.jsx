import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AppliedCard = ({ job }) => {
    const { logo, job_category, engineer_title, LTD, location, salary, _id } = job
    return (
        <div className='w-full border rounded-md flex justify-between items-center p-4 mt-5 flex-wrap'>

            <div className='flex items-center flex-wrap gap-5'>
                <div className='bg-gray-300 w-44 h-44 rounded-md flex justify-center items-center'>
                    <img className='w-32' src={logo} alt="" />
                </div>
                <div className='flex flex-col justify-between'>
                    <h3 className='mb-1 text-xl font-semibold'>{engineer_title}</h3>
                    <p>{LTD}</p>
                    <div className='flex'>
                        {
                            job_category.map(category => <button className='border description border-sky-400 text-sky-400 rounded-md mr-1 px-6 py-2'>{category}</button>)
                        }
                    </div>
                    <p className='description flex flex-wrap'>
                        <span className='mr-5'> <MapPinIcon className="h-6 w-6 text-sky-300 inline" /> {location} </span>
                        <span > <CurrencyDollarIcon className="h-6 w-6 text-sky-300 inline" /> Salary : {salary} </span>
                    </p>
                </div>
            </div>
            <Link to={`/jobDetails/${_id}`}><button onClick={() => detailHandler(_id)} className='btn-primary'>View Details</button></Link>
        </div>
    );
};

export default AppliedCard;