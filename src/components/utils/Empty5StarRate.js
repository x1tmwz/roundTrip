import React from 'react';
import { v4 as uuid } from 'uuid';

const Empty5StarRating = (props) => {
    const makeStars = (num) => {
        const starsArray = []
        for (let i = 0; i < 5; i++) {
            const className = i < num ? "fullStar" : "emptyStar"
            const id = uuid();
            starsArray.push(<span key={id} role="img" aria-label={id} className={className}> ★</span>);
        }
        return starsArray;
    }
    return (
        <div>
            {makeStars(props.rating)}
        </div>
    );
}

export default Empty5StarRating;