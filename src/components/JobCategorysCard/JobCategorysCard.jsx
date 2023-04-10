import React from 'react';

const JobCategorysCard = ({category}) => {
    const {category_name, picture,available_job } = category;
    return (
        <div className='w-72 bg-primary rounded-md p-9'>
            <img className='w-11 h-11 my-4' src={picture} alt="" />
            <h3 className='my-4 text-2xl font-semibold'>{category_name}</h3>
            <p className='description'>{available_job} Jobs Available</p>
        </div>
    );
};

export default JobCategorysCard;