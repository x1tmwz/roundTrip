import React from 'react'
import StarRate from '../utils/StarRate';
import moment from 'moment';
import language from '../../language/hebrew.json';
import nightsCalculation from '../../utils/nightsCalculation';
import translateNumber from '../../utils/translateNumber';

const AdItem = ({
    roomType,
    rooms,
    hotelName,
    rating,
    image,
    dateCheckIn,
    dateCheckOut,
    price }) => {
    const nights = nightsCalculation(dateCheckOut, dateCheckIn);
    return (
        <div className="adItem-Container">
            <div>
                <img src={image} alt="" className="image-regular" />
            </div>
            <div className="adItem-hotelInfoContainer">
                <div className="adItem-hotelInfoContainer_textContainer">
                    <h3 className="lightRoyalBlueText">{hotelName}</h3>
                    <StarRate rating={rating} />
                    <p className="greyText"><span className="boldText">{language.adItem.departure}</span> {moment(dateCheckIn).format('DD/MM | HH:mm')}</p>
                    <p className="greyText"><span className="boldText">{language.adItem.return}</span> {moment(dateCheckOut).format('DD/MM | HH:mm')}</p>
                    <p className="greyText boldText">
                        {`${nights > 1 ? translateNumber(language.numbers, nights) + " " + language.adItem.nights : language.adItem.night} | 
                      ${rooms > 1 ? translateNumber(language.numbers, rooms) + " " + language.adItem.rooms : language.adItem.roomOnly}`}
                    </p>
                </div>
                <button className="lightBlueRoyalButton">{language.adItem.moreInfoAboutHotel}</button>
            </div>
            <div className="adItem-priceContainer">
                <div className="adItem-priceContainer-textContainer lightRoyalBlueText">
                    <h1>{"$" + new Intl.NumberFormat().format(price)}</h1>
                    <span>{language.adItem.averagePriceForPerosnInCoupleRoom}</span>
                    <span>{language.roomTypes[roomType]}</span>
                </div>
                <button className="redButton">{language.adItem.moreDetails}</button>
            </div>
        </div>
    );



}
export default AdItem;

