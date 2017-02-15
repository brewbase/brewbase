export default function breweryErrorReducer(state = false, action){
    switch(action.type) {
        case "BREWERIES_ERROR": {
            return action.error
        }
        case "RECEIVE_BREWERIES":
        case "START_FETCHING_BREWERIES": {
            return false
        }
        default: {
            return state
        }
    }
}
