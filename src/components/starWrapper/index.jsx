import React, { useState } from 'react';
import Star from '../star';

const StarWrapper = ({ starCount }) => {

  const [clickedID, setClickedID] = useState(-1);
  const [hoveredID, setHoveredID] = useState(-1);

  const range = (number) => {
    return(     
      Array.from(new Array(number), (x, i) => i)
      )}
    
  return (
    <div>
      {range(starCount).map((starID, index) => {
        
        return (
          <Star
            key={index}
            isLit={hoveredID >= starID || clickedID >= starID}
            onClick={() => setClickedID(index)}
            onHoverIn={()=>
              setHoveredID(index)
            }
            onHoverOut={()=>
              setHoveredID(-1)
            }

          />
        )
      })}
    </div>
  )
}

export default StarWrapper;