import React, { useState } from 'react'

import wallet from '../../../assets/svg/wallet.svg';

import Rating from '../../rating/Rating';
import Button from '../../button/Button';
import User from '../user/User'

const Product = ({ item, border, isLoading }) => {
    const [data, setData] = useState(null);

    return (
        <div className={`bg-accent flex flex-col p-5 gap-5 ${border ? "border-[1px] border-dashed border-primary" : ""}`}>
            {
                isLoading
                    ? <>
                        <div className="px-20 lg:px-28 xl:px-44 py-2 bg-line rounded-lg animate-pulse " />
                        <div className=" py-[3px] bg-line rounded-lg animate-pulse -mb-3" />
                        <div className=" py-[3px] bg-line rounded-lg animate-pulse -mb-3" />
                        <div className=" py-[3px] bg-line rounded-lg animate-pulse -mb-3" />
                        <div className=" py-[3px] bg-line rounded-lg animate-pulse -mb-3" />
                        <div className=" py-[3px] bg-line rounded-lg animate-pulse -mb-3" />
                        <div className=" py-[3px] bg-line rounded-lg animate-pulse -mb-3" />
                        <div className=" py-[3px] bg-line rounded-lg animate-pulse -mb-3" />
                        <div className=" py-[3px] bg-line rounded-lg animate-pulse -mb-3" />
                        <div className='flex items-center justify-between w-full my-4'>
                            <div className="w-[15%] py-[3px] bg-line rounded-lg animate-pulse -mb-3" />
                            <div>
                                <Rating />
                            </div>
                        </div>
                    </>
                    : <>
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
                                <Rating onClick={(value) => setData({ rating: value, product: item?.id })} />
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Button variant='accent' className='w-fit'>
                                Show Detail
                            </Button>
                        </div>
                    </>
            }
            <User
                data={data}
                setData={setData}
            />
        </div >
    )
}

export default Product