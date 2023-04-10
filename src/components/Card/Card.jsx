import React from 'react';
import './Card.css'
const Card = ({job}) => {
    const {logo, _id, name, job_category, engineer_title,} = job
    console.log();
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
            <button className='btn-primary'>View Details</button>
        </div>
    );
};

export default Card;