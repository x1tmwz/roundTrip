const defaultState = {
    rating: [1, 2, 3, 4, 5],
    priceRange: { priceFrom: 819, priceTo: 4000 ,min:819,max:4000},
    guestBase: ["sleeping", "breakfast"],
    text: ""
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "SET_RATING_FILTERS":
            if (state.rating.includes(action.rating)) {
                return { ...state, rating: state.rating.filter((rating) => rating !== action.rating) };
            } else {
                return { ...state, rating: [...state.rating, action.rating] }
            }
        case "SET_PRICE_RANGE":
            return { ...state, priceRange: { priceFrom: action.from, priceTo: action.to,min:819,max:4000 } }
        case "SET_GUESTBASE":
            if (state.guestBase.includes(action.guestBaseOption)) {
                return { ...state, guestBase: state.guestBase.filter((option) => option !== action.guestBaseOption) };
            } else {
                return { ...state, guestBase: [...state.guestBase, action.guestBaseOption] }
            }
        case "SET_TEXT_FILTER":
            return { ...state, text: action.text };

        default:
            return state;
    }
}
