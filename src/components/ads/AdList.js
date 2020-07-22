import React from 'react'
import AdItem from './AdItem';




const AdsList = ({ads=[]}) => {
    return (
        <div>
            {ads.map((ad) => {
                return (
                    <AdItem key={ad.id} {...ad} />
                );
            })}
        </div>
    );
}
export default AdsList;