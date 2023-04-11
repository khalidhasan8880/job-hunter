import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { JobContext } from '../../App';
import './JobDetails.css'
import backgroundImg from '../../assets/All Images/Vector.png'
import backgroundImg1 from '../../assets/All Images/Vector-1.png'
const JobDetails = () => {

    const { id } = useParams()
    const jobs = useContext(JobContext)
    const job = jobs.find(job => job._id === id)
    const { _id, name, job_category, logo, engineer_title, LTD, location, salary, job_description, job_responsibility, education_requirement, experiences, email, phone, address } = job


    return (
        <div>
            {/* for background images  */}
            <div className=' bg-sky-100 w-full h-96 bg flex justify-center items-center'>
                <h2 className='md:text-4xl text-3xl text-center mt-11 font-bold  '>About Job</h2>
            </div>
            {/* for job Details  */}

            <div className='grid md:grid-cols-6 pt-24'>

                <div className='bg-red-100 md:col-span-4'>
                    <p><span className='my-8 text-xl font-semibold'>Job Description: </span>
                        {job_description}
                    </p>
                    <p><span className='my-8 text-xl font-semibold'>Job Responsibility: </span>
                        {job_responsibility}
                    </p>
                    <p><span className='my-8 text-xl font-semibold'>Educational Requirement: </span>
                        {education_requirement}
                    </p>
                </div>

                {/* card  */}
                <div className='bg-sky-100 md:col-span-2'>
                    <h1>card</h1>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;