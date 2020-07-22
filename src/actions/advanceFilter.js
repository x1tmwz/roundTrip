const setRatingFilter = (rating=1) => ({
    type: "SET_RATING_FILTERS",
    rating
})

const setPriceRange=(arr=[819,4000])=>({
    type:"SET_PRICE_RANGE",
    from:arr[0],
    to:arr[1]
})
const setGuestBase=(guestBaseOption="sleeping")=>({
    type:"SET_GUESTBASE",
    guestBaseOption

})
const setTextFilter =(text="")=>({
    type:"SET_TEXT_FILTER",
    text
})
export {setRatingFilter,setPriceRange,setGuestBase,setTextFilter };