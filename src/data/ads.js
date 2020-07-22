import { v4 as uuid } from 'uuid';
import moment from 'moment';

const createAds = () => {
    const roomTypes = ["doubleRoom", "classicRoom"];
    const hotelName = ["Tomer Hotel", "Cool hotel"];
    const guestBase = ["sleeping", "breakfast"];
    const items = [1, 2, 3, 3, 4, 5].map((rate) => {
        return {
            id: uuid(),
            roomType: Math.random() > 0.5 ? roomTypes[0] : roomTypes[1],
            hotelName: Math.random() > 0.5 ? hotelName[0] : hotelName[1],
            rooms: 1,
            guestBase: rate > 3 ? guestBase : [guestBase[0]],
            price: Math.floor(Math.random() * (4000 - 819)) + 819,
            dateCheckIn: moment(),
            dateCheckOut: moment().add(rate, "days"),
            rating: rate,
            image: "https://cdn4.hotelopia.com/giata/bigger/00/004654/004654a_hb_s_001.jpg",
            createdAt:moment().subtract(rate,'days')
        }
    })
    return new Promise((resolve, reject) => {
        resolve(items);
    })
}
export default createAds;