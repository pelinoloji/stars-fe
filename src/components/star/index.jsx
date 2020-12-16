import React from 'react';
import StarIcon from '@material-ui/icons/Star'; // full star
import StarBorderIcon from '@material-ui/icons/StarHalf'; // empty star

const Star = ({ isLit }) => {
    return (
        <span
            aria-label="star"
        >
            {isLit ?
                <StarIcon aria-label="light" /> :
                <StarBorderIcon aria-label="dark" />
            }
        </span>
    )
}

export default Star;