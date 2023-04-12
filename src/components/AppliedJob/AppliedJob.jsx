import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../App';
import AppliedCard from './AppliedCard';

{/* <AppliedCard job={job}></AppliedCard> */ }


const AppliedJob = () => {
    const [appliedJob, setAppliedJob] = useState([])
    const jobs = useContext(JobContext)
    useEffect(() => {
        let appliedJobs = []
        const getAppliedJobFromDb = localStorage.getItem('applied-jobs')
        if (getAppliedJobFromDb) {
            const appliedJob = JSON.parse(getAppliedJobFromDb);
            console.log(appliedJob);
            for (const id of appliedJob) {
                const matched = jobs.find(job => job._id === id)
                appliedJobs.push(matched)
            }
            setAppliedJob(appliedJobs)
        }
    }, [])


    const [filter, setFilter] = useState('')
    const filterOnsite = () => {
        setFilter('Onsite')
    }
    const filterRemote = () => {
        setFilter('Remote')
    }

    return (
        <div>
            {/* banner */}
            <div className=' bg-sky-100 w-full h-96 bg flex justify-center items-center'>
                <h2 className='md:text-4xl text-3xl text-center mt-11 font-bold'>Applied Job</h2>
            </div>

            <div className=' mx-auto'>
                <div className='text-right'>
                    <button onClick={filterRemote} className='btn-primary'>Filter by Remote</button>
                    <button onClick={filterOnsite} className='btn-primary ml-3'>Filter by Onsite</button>
                </div>
                <div className='container'>
                    {
                        appliedJob.map(job => {
                            if (job?.job_category.find(category => category === filter || filter === '')) {
                                return <AppliedCard job={job}></AppliedCard>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;