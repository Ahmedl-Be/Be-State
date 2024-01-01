import React from 'react'
import Card from './UI/Card';

const Categories = ({ category }) => {
    return (
        <div className='md:p-6 mt-10'>
            <h1 className='text-4xl opacity-90 text-center md:text-start'>{category}</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1	">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Categories