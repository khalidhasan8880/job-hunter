import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
const Home = () => {
    return (
        <div>
            <div className='bg-sky-100'>
                <Banner></Banner>
            </div>


            <div className='mt-36'>
                <h2 className='md:text-4xl text-3xl font-bold  text-center my-5font-bold'>Job Category List</h2>
                <p className='description text-center my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                
                <div>

                </div>
            </div>
        </div>
    );
};

export default Home;