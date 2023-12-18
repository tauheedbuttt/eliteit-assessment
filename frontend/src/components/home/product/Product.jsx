import React, { useState } from 'react'

import wallet from '../../../assets/svg/wallet.svg';

import Rating from '../../rating/Rating';
import Button from '../../button/Button';
import { User } from '../user/User';

const Product = ({ item, border, isLoading }) => {

    const [data, setData] = useState(null);

    return (
        <div className={`bg-accent flex flex-col p-5 gap-5 ${border ? "border-[1px] border-dashed border-primary" : ""}`}>
            <h1 className='text-center text-lg text-secondary font-bold'>{item?.name}</h1>
            <p className='flex flex-1 text-secondary font-normal leading-snug px-2 text-justify'>{item?.description}</p>
            <div className=' border-t-[1px] border-line' />
            <div className='flex items-center justify-between'>
                {/* price */}
                <div className='flex gap-2 items-center text-secondary'>
                    <img src={wallet} />
                    <span>{item?.price}$</span>
                </div>

                {/* rating */}
                <div>
                    <Rating onClick={isLoading ? null : (value) => setData({ rating: value, product: item?.id })} />
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Button variant='accent' className='w-fit'>
                    Show Detail
                </Button>
            </div>
            <User
                data={data}
                setData={setData}
            />
        </div >
    )
}

export default Product