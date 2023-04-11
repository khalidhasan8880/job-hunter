import React, { useContext, useEffect, useState } from 'react';
import { json, useLoaderData, useParams } from 'react-router-dom';
import { JobContext } from '../../App';
import './JobDetails.css'
import { CurrencyDollarIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../fakedb';


const JobDetails = () => {

    const { id } = useParams()
    const jobs = useContext(JobContext)
    const job = jobs.find(job => job._id === id)
    const { _id, name, job_category, logo, engineer_title, LTD, location, salary, job_description, job_responsibility, education_requirement, experiences, email, phone, address } = job


    const applyButtonHandler=(id)=>{
        let appliedJObs ;
        const getAppliedJobs = localStorage.getItem('applied-jobs')
        if (getAppliedJobs) {
            appliedJObs = JSON.parse(getAppliedJobs)
            const matched = appliedJObs.find(localId=>localId === id)
            if (!matched) {
                appliedJObs.push(id)
            }else{
                alert('already applied')
            }
        }else{
            appliedJObs = []
            appliedJObs.push(id)
        }
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJObs))
    }
  
    return (
        <div>
            {/* for background images  */}
            <div className=' bg-sky-100 w-full h-96 bg flex justify-center items-center'>
                <h2 className='md:text-4xl text-3xl text-center mt-11 font-bold  '>About Job</h2>
            </div>
            {/* for job Details  */}

            <div className='grid md:grid-cols-6 gap-x-4 container mx-auto mt-12'>
                <div className=' md:col-span-4'>
                    <div className='p-7'>
                        <p className='my-8'><span className='my-8 text-xl font-semibold'>Job Description: </span>
                            {job_description}
                        </p>
                        <p className='my-8'><span className='my-8 text-xl font-semibold'>Job Responsibility: </span>
                            {job_responsibility}
                        </p>
                        <p className='my-8'><span className='my-8 text-xl font-semibold'>Educational Requirement: </span> <br /><br />
                            {education_requirement}
                        </p>
                        <p className='my-8'><span className='my-8 text-xl font-semibold'>Educational Requirement: </span> <br /><br />
                            {experiences}
                        </p>
                    </div>
                </div>

                {/* card  */}
                <div className=' md:col-span-2'>
                    <div className='w-96 mx-auto'>
                        <div class="grid grid-cols-1 divide-y p-5 rounded-md bg-gradient-to-r from-cyan-50 to-blue-50 py-11">
                            <div className=''>
                                <h3 className='mt-6 mb-2 text-xl font-semibold'>Job Details</h3>
                            </div>
                            <div className=''>
                                <p className='my-2'><CurrencyDollarIcon className="h-6 w-6 text-sky-300 inline" /> Salary :  {salary}</p>
                                <p className='my-2'><CurrencyDollarIcon className="h-6 w-6 text-sky-300 inline" /> Job Title :  {engineer_title}</p>
                                <h3 className='mt-6 mb-2 text-xl font-semibold'>Contact information</h3>
                            </div>
                            <div className=''>
                                <p className='my-2'><PhoneIcon className="h-6 w-6 text-sky-300 inline" /> Phone :  {phone}</p>
                                <p className='my-2'><EnvelopeIcon className="h-6 w-6 text-sky-300 inline" /> Email :  {email}</p>
                                <p className='my-2'><MapPinIcon className="h-6 w-6 text-sky-300 inline" /> Address :  {address}</p>
                            </div>
                        </div>
                        <button onClick={()=> applyButtonHandler(id)} className='btn-primary w-full'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails