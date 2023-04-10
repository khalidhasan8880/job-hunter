import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategorysCard from '../JobCategorysCard/JobCategorysCard';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('job_category.json')
            .then(res => res.json())
            .then(categories => setCategories(categories))
    }, [])

    const data = useLoaderData()

    const [open, setOpen] = useState(false)

    const seeMoreHandler=()=> {
        setOpen(!open)
    }

    const detailHandler=(id)=>{
     
    }

    return (
        <div>
            {/* banner */}
            <div className='bg-primary'>
                <Banner></Banner>
            </div>

            {/* job category section */}
            <div className='mt-36 flex flex-col justify-center items-center'>
                <h2 className='md:text-4xl text-3xl font-bold  my-5 '>Job Category List</h2>
                <p className='description my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className=' flex flex-wrap gap-6 px-44 pt-9 mb-10'>
                    {
                        categories.map(category => <JobCategorysCard key={category._id} category={category}></JobCategorysCard>)
                    }
                </div>
            </div>
            {/* feature section */}

            <div className='mt-36 flex flex-col justify-center items-center'>
                <h2 className='md:text-4xl text-3xl font-bold  my-5 '>Featured Job</h2>
                <p className='description my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-2 gap-5 mt-14'>
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