import { useState } from "react";
import Star from "./Star";

export default function StarRating({setUserRating}) {
  const [rating, setRating] = useState(0)
  const [tempRating, setTempRating] = useState(0)

  function handleRating(index) {
    setRating(index + 1)
    setUserRating(index + 1)
  }

  return (
  <div className='star-rating'>
    <div className='stars'>
      {Array(10).fill(null).map((_, index) => (
          <Star
              key={index}
              index={index}
              rating={tempRating ? tempRating : rating}
              handleClick={() => handleRating(index)}
              handleMouseEnter={() => setTempRating(index + 1)}
              handleMouseLeave={() => setTempRating(0)}
          />
      ))}
    </div>
    <div className='rating'>{tempRating || rating}</div>
  </div>
  )
}
