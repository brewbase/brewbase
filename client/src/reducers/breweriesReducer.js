export default function breweriesReducer(state = [], action) {
    switch(action.type){
        case "RECEIVE_BREWERIES": {
            return action.breweries
        }
        case "BREWERIES_ERROR":
        case "START_FETCHING_BREWERIES": {
            return []
        }
        default: {
            return state
        }
    }
}
