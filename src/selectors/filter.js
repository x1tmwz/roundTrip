import Moment from 'moment';
import nightsCalculation from '../utils/nightsCalculation';

const filterSelector = (ads = [], { sortBy, mostPouplar, mostWorthwhile, cheapest }, { rating, priceRange, guestBase, text }) => {
    return ads.filter(ad => {
        const ratingMatch = rating.includes(ad.rating);
        const priceMatch = priceRange.priceFrom <= ad.price && priceRange.priceTo >= ad.price;
        const guestBaseMatch = ad.guestBase.reduce((startValue,currentValue)=>{
            if(guestBase.includes(currentValue)){
                return startValue = true
            }
            return startValue
        },false)
        const textMatch = ad.hotelName.toLowerCase().includes(text.toLowerCase());
     
        return ratingMatch && priceMatch && guestBaseMatch && textMatch;

    }).sort((a, b) => {
        let num = 1;
        if (sortBy === 'date') {
            num = new Moment(b.createdAt).valueOf() - new Moment(a.createdAt).valueOf();
        }
        if (sortBy === 'highToLow') {
            num = a.price < b.price ? 1 : -1;
        }
        if (sortBy === 'lowToHigh' || cheapest) {
            num = a.price < b.price ? -1 : 1;
        }
        if (mostWorthwhile) {
            const worthA = (a.price / a.rating) / nightsCalculation(a.dateCheckOut, a.dateCheckIn);
            const worthB = (b.price / b.rating) / nightsCalculation(b.dateCheckOut, b.dateCheckIn);
            return worthA < worthB ? -1 : 1;
        }
        if (mostPouplar) {
            return a.rating < b.rating ? 1 : -1;
        }
        return num;
    })

}
export default filterSelector;