export default function fetchingBrewsReducer(state = false, action) {
    switch(action.type){
        case "START_FETCHING_BREWS": {
            return true
        }
        case "BREWS_ERROR":
        case "RECEIVE_BREWS": {
            return false
        }
        default: {
            return state
        }
    }
}
