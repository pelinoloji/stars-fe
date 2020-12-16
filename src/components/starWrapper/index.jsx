import React from 'react'
import Star from '../star'

const range = (number) => Array.from(new Array(number), (x, i) => i)

const starWrapper = ({ starCount }) => {
    return (
        <div>
            {range(starCount).map((i, index) => (
                <Star
                    key={index}
                    isLit={index === 0}
                />
            ))}
        </div>
    )
}

export default starWrapper;