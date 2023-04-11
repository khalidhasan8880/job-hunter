import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../App';
import AppliedCard from './AppliedCard';

const AppliedJob = () => {
    const [appliedJob, setAppliedJob] = useState([])
    const jobs = useContext(JobContext)
    useEffect(()=>{
        let appliedJobs = []
        const getAppliedJobFromDb = localStorage.getItem('applied-jobs')
        const appliedJob = JSON.parse(getAppliedJobFromDb);
        console.log(appliedJob);
        for (const id of appliedJob) {
            const matched = jobs.find(job=>job._id === id)
            appliedJobs.push(matched)
        }
        setAppliedJob(appliedJobs)
    },[])

    return (
        <div>
            {/* banner */}
            <div className=' bg-sky-100 w-full h-96 bg flex justify-center items-center'>
                <h2 className='md:text-4xl text-3xl text-center mt-11 font-bold'>Applied Job</h2>
            </div>

            <div className='container mx-auto'>
                {
                    appliedJob.map(job=> <AppliedCard job={job}></AppliedCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;