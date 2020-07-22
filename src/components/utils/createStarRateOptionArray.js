import React from 'react';
import Empty5StarRate from './Empty5StarRate';

const createStarRateOptionArray = (num) => {
    const starArry = [];
    for (let i = 1; i <= num; i++) {
        starArry.push({
            ui: <Empty5StarRate rating={i} />,
            value: i
        })
    }
    return starArry;
}
export default createStarRateOptionArray;