import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
const Card = ({job, detailHandler}) => {
    const {logo, _id, name, job_category, engineer_title,} = job
 
    return (
        <div className='bg-red-100 card rounded-md p-11'>
            <img className='w-44' src={logo} alt="" />
            <h3>{engineer_title}</h3>
            <p></p>
            {

            }
            <p>
                <span></span>
                <span></span>
            </p>
            <Link to={`/jobDetails/${_id}`}><button onClick={()=> detailHandler(_id)} className='btn-primary'>View Details</button></Link>
        </div>
    );
};

export default Card;