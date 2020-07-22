const defaultFilterState = {
    sortBy: 'date',
    mostPouplar: false,
    mostWorthwhile: false,
    cheapest: false
}
export default (state = defaultFilterState, action) => {
    switch (action.type) {
        case "SORT_BY":
            return {
                ...defaultFilterState,
                sortBy: action.sortBy
            }
        case "SORT_BY_RATING":
            return {
                ...defaultFilterState,
                mostPouplar: !state.mostPouplar
            }
        case "SORT_BY_WORTHWHILE":
            return {
                ...defaultFilterState,
                mostWorthwhile: !state.mostWorthwhile
            }
        case "SORT_BY_CHEAPEST":
            return {
                ...defaultFilterState,
                cheapest: !state.cheapest
            }
        case "CLEAR_FILTER": {
            return defaultFilterState
        }
        default:
            return state;
    }
}


