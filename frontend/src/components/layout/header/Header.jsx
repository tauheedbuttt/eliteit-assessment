import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-primary text-white flex justify-between items-center
         px-10 py-2'>
            <span className='text-xl font-semibold'>LOGO</span>
            <div className='flex gap-10 text-sm'>
                <Link to="/">Home</Link>
                <Link to="/listing">Product Listing</Link>
            </div>
        </header>
    )
}

export default Header