import React from 'react';
import { v4 as uuid } from 'uuid';

const StarRating = (props) => {
    const makeStars =(num)=>{
        const starsArray =[]
        for(let i=0;i<num;i++){
            const id = uuid();
            starsArray.push(<span key={id} role="img" aria-label={id} className="fullStar"> ★</span>);  
        }
        return starsArray;
    }
    return (
        <div>
           {makeStars(props.rating)}
        </div>
    );
}

export default StarRating;