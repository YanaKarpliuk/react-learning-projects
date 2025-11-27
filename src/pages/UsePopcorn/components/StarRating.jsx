import { useState } from "react";
import Star from "./Star";

export default function StarRating() {
  const [rating, setRating] = useState(0)
  const [tempRating, setTempRating] = useState(0)

  return (
      <div className='star-rating-wrapper'>
        <div className='star-rating'>
          <div className='stars'>
            {Array(10).fill(null).map((_, index) => (
                <Star
                    key={index}
                    index={index}
                    rating={tempRating ? tempRating : rating}
                    handleClick={() => setRating(index + 1)}
                    handleMouseEnter={() => setTempRating(index + 1)}
                    handleMouseLeave={() => setTempRating(0)}
                />
            ))}
          </div>
          <div className='rating'>{tempRating || rating}</div>
        </div>
        <button
            className='add-to-list-btn'
            aria-label='Add the movie to list'
        >
          + Add to list
        </button>
      </div>
  )
}
