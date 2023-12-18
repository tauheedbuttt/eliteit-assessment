import React from 'react'
import { Link } from 'react-router-dom'

const Icon = ({ to, icon }) => {
    return (
        <Link to={to} className='p-3 bg-secondary-medium rounded-md w-[40px] h-[40px] flex items-center justify-center'>
            <img src={icon} alt='social' />
        </Link>
    )
}

export default Icon