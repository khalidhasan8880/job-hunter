import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';

const Card = ({job, detailHandler}) => {
    const {logo, _id, name, LTD, job_category, engineer_title, address, location, salary} = job
 
    return (
        <div className='card rounded-md p-9 flex flex-col justify-between border'>
            <img className='w-20 h-9' src={logo} alt="" />
            <h3  className='my-2 text-xl font-semibold'>{engineer_title}</h3>
            <p>{LTD}</p>
           <div className='flex'>
           {
                job_category.map(category=> <button className='border-2 description border-sky-400 text-sky-400 rounded-md mr-6 px-6 py-2'>{category}</button>)
            }
           </div>
            <p className='description flex flex-wrap'>
                <span className='mr-5'> <MapPinIcon className="h-6 w-6 text-sky-300 inline" /> {location} </span>
                <span > <CurrencyDollarIcon className="h-6 w-6 text-sky-300 inline" /> Salary : {salary} </span>
            </p>
            <Link to={`/jobDetails/${_id}`}><button onClick={()=> detailHandler(_id)} className='btn-primary'>View Details</button></Link>
        </div>
    );
};

export default Card;