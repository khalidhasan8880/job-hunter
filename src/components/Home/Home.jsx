import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategorysCard from '../JobCategorysCard/JobCategorysCard';
import './Home.css'
const Home = () => {
    const [data, setData]= useState([])

    useEffect(()=>{
        fetch('job_category.json')
        .then(res=>res.json())
        .then(data=> setData(data))
    },[])

    return (
        <div>
            <div className='bg-primary'>
                <Banner></Banner>
                
            </div>


            <div className='mt-36 flex flex-col justify-center items-center'>
                <h2 className='md:text-4xl text-3xl font-bold  my-5 '>Job Category List</h2>
                <p className='description my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                
                <div className=' flex flex-wrap gap-6 px-44 pt-9 mb-10'>
                    {
                        data.map(category=> <JobCategorysCard category={category}></JobCategorysCard> )
                    }
                </div>
            </div>

            
        </div>
    );
};

export default Home;