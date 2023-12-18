import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating, onClick, size = 14 }) => {
    const ratings = [1, 2, 3, 4, 5];
    return (
        <div className="flex items-center space-x-1 w-full justify-between">
            {
                ratings?.map((item, index) => {
                    const selected = item <= rating;
                    return (
                        <div key={index} onClick={() => onClick(item)} className={onClick ? "cursor-pointer" : ''}>
                            {
                                selected
                                    ?
                                    <FaStar
                                        className={`text-star`}
                                        style={{ fontSize: size }}
                                    />
                                    :
                                    <FaRegStar
                                        className={`text-secondary`}
                                        style={{ fontSize: size }}
                                    />
                            }
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Rating