
const sortByPriceLowToHigh = ()=>({
    type:'SORT_BY',
    sortBy:'lowToHigh'
})
const sortByPriceHighToLow = ()=>({
    type:'SORT_BY',
    sortBy:'highToLow'
})
const sortByDate =()=>({
    type:'SORT_BY',
    sortBy:'date'
})
const sortByRating =()=>({
    type:"SORT_BY_RATING"
})
const sortByMostWorthwhile=()=>({
    type:"SORT_BY_WORTHWHILE"
})
const sortByCheapest =()=>({
    type:"SORT_BY_CHEAPEST"
})
const clearFilter =()=>({
    type:"CLEAR_FILTER"
})
export {sortByDate,sortByPriceHighToLow,sortByPriceLowToHigh,sortByRating,sortByMostWorthwhile,sortByCheapest,clearFilter};