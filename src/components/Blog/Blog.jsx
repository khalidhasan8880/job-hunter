import React from 'react';
const Blog = () => {
    return (
        <div className=' pt-56 px-8 grid grid-cols-1 divide-y-2'>
            <div>
                <h2 className='md:text-2xl text-1xl font-bold  my-2 '>What is custom hook in react ?</h2>
                <p className='description my-5'>The biggest advantage of using hooks is that we can insert a specific functionality of a component into a custom hook and later we can easily add this functionality to other components.</p>
            </div>
            <div>
                <h2 className='md:text-2xl text-1xl font-bold  my-2 '>Where Should use context Api </h2>
                <p className='description my-5'>Context provides a way to pass data without having to pass props down manually at every level. <br />
                    <span className='text-gray-400'> When we will use context api ?</span>
                    <ul>
                        <li>
                            if we need pass data every child components from parent component then we can use context api.
                        </li>
                        <li>
                            Some parent components will have common data. If we want the common data from parent will propagated to all child components .
                        </li>
                    </ul>
                </p>
            </div>
            <div>
                <h2 className='md:text-2xl text-1xl font-bold  my-2 '>What is useRef ?</h2>
                <p className='description my-5'>
                    Ref gives us a way to access the DOM or React Element. if we want to give an initial value of react Element or control from function  then we can use useRef. we can use useRef for stored value without rerendering any components.
                </p>
            </div>
            <div>
                <h2 className='md:text-2xl text-1xl font-bold  my-2 '>What is useMemo ?</h2>
                <p className='description my-5'>
                This prevents unnecessary recalculations of the result when the component is re-rendered. We can stored result of calculation using useMemo hook . Thats why we don't need to recalculate the same calculation.
                </p>
            </div>
        </div>
    );
};

export default Blog;