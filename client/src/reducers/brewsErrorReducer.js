export default function brewsErrorReducer(state = false, action){
    switch(action.type) {
        case "BREWS_ERROR": {
            return action.error
        }
        case "RECEIVE_BREWS":
        case "START_FETCHING_BREWS": {
            return false
        }
        default: {
            return state
        }
    }
}
