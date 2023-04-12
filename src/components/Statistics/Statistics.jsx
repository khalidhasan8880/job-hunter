
import React, { PureComponent } from 'react';
import { PieChart, Pie,Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Assignment-1 ', value: 60 },
    { name: 'Assignment-2 ', value: 60 },
    { name: 'Assignment-3 ', value: 56 },
    { name: 'Assignment-4 ', value: 60 },
    { name: 'Assignment-5 ', value: 60 },
    { name: 'Assignment-6 ', value: 59 },
    { name: 'Assignment-7 ', value: 60 },
    { name: 'Assignment-8 ', value: 60 },
];

const Statistics = () => {
    return (
       
            <div className='flex justify-center items-center flex-col pt-56'>
                <h1 className='text-3xl font-bold'>My Assignment Result Status</h1>
                
                <PieChart width={500} height={500}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={180}
                        fill="#8884d8"
                        label
                    />
                    
                    <Tooltip />
                </PieChart>
          
            </div>
       
    );
};

export default Statistics;