const initialState = [
    {
        brewery: {
            name: 'wasatch',
            id: '23kdjfk3'
        }
    }
]

export default function breweriesReducer(state = initialState, action) {
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
