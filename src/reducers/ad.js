export default (state = [], action) => {
    switch (action.type) {
        case 'SET_ADS':
            return action.ads
        default:
            return state;

    }
}