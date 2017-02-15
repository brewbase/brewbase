export default function fetchingBreweriesReducer(state = false, action) {
    switch(action.type){
        case "START_FETCHING_BREWERIES": {
            return true
        }
        case "BREWERIES_ERROR":
        case "RECEIVE_BREWERIES": {
            return false
        }
        default: {
            return state
        }
    }
}
