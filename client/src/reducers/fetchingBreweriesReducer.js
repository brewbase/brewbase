export default function fetchingBreweriesReducer(state = false, action) {
    switch(action.type){
        case "START_FETCHING_BREWERIES": {
            return {
                ...state,
                fetchingBreweries: true
            }
        }
        default: return state
    }
}
