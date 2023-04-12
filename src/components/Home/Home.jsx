import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategorysCard from '../JobCategorysCard/JobCategorysCard';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import { JobContext } from '../../App';
const Home = () => {
    const [categories, setCategories] = useState([])
const data = useContext(JobContext)
    useEffect(() => {
        fetch('job_category.json')
            .then(res => res.json())
            .then(categories => setCategories(categories))
    }, [])


    const [open, setOpen] = useState(false)

    const seeMoreHandler=()=> {
        setOpen(!open)
    }

    const detailHandler=(id)=>{
     
    }

    return (
        <div className=''>
            {/* banner */}
            <div className='bg-primary'>
                <Banner></Banner>
            </div>

            {/* job category section */}
            <div className='mt-36 flex flex-col justify-center items-center'>
                <h2 className='md:text-4xl text-3xl font-bold  my-2 '>Job Category List</h2>
                <p className='description text-center my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className=' flex flex-wrap gap-6 justify-center pt-9'>
                    {
                        categories.map(category => <JobCategorysCard key={category._id} category={category}></JobCategorysCard>)
                    }
                </div>
            </div>
            {/* feature section */}

            <div className='mt-36 flex flex-col justify-center items-center'>
                <h2 className='md:text-4xl text-3xl font-bold  my-2 '>Featured Job</h2>
                <p className='description text-center my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-2 gap-4 mt-14 box-border'>
                    {
                        open?data.map(job=> <Card key={job.phone} detailHandler={detailHandler} job={job}></Card>) : data.slice(0,4).map(job=>  <Card key={job.phone} detailHandler={detailHandler} job={job}></Card>)
                    }
                </div>

                <button className='btn-primary' onClick={seeMoreHandler}>{open? 'See Less': 'See More'}</button>
            </div>
        </div>
    );
};

export default Home;