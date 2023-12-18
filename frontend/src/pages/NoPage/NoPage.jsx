import React from 'react'

import Empty from "../../assets/images/empty.png";

const NoPage = () => {
    return (
        <div className='bg-accent h-screen flex flex-col gap-52 items-center justify-center'>
            <h1 className='text-4xl text-primary'>! Error 404 !</h1>
            <img src={Empty} className='w-44 h-4w-44' />
            <h1 className='text-primary text-lg'>Page Not Found</h1>
        </div>
    )
}

export default NoPage