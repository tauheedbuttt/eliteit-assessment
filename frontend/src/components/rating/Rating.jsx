import React from 'react'
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating = 3 }) => {
    const ratings = [1, 2, 3, 4, 5];
    return (
        <div class="flex items-center space-x-1">
            {
                ratings?.map((item, index) => {
                    const selected = item <= rating;
                    return (
                        <div key={index}>
                            <FaStar
                                className={`w-4 h-4 text-${selected ? "primary" : "yellow-300"} cursor-pointer`}
                            />
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Rating