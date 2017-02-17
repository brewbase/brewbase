export default function brewsReducer(state = [], action) {
    switch(action.type){
        case "RECEIVE_BREWS": {
            return action.brews
        }
        case "BREWS_ERROR":
        case "START_FETCHING_BREWS": {
            return []
        }
        default: {
            return state
        }
    }
}
