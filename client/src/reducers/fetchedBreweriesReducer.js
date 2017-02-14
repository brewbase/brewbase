export default function fetchedBreweriesReducer(state = false, action){
    switch(action.type){
        case "RECEIVE_BREWERIES": {
            return {
                ...state,
                fetchingBreweries: false,
                fetchedBreweries: true,
                breweries: action.breweries
            }
        }
        default: return state;
    }
}
