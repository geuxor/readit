import { FaStar } from 'react-icons/fa';
import './StarRating.css'

import React, {useState} from 'react';

export default function StarRating() {
  const [rating, setRating] = useState(null)
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <label key={i}>
            <input type="radio" name="rating" onClick={() => setRating(ratingValue)
            }/>
            <FaStar className="star" size={20} color={ratingValue <= rating ? 'gold' : 'grey' }/>
          </label>
        );
      })}
    </div>
  );
}