const initialState = [
    {
        name: 'taco',
        id: 'woirw'
    },
    {
        name: 'bell',
        id: '34er'
    }
]

export default function breweriesReducer(state = initialState, action) {
    switch(action.type){
        case "START_FETCHING_BREWERIES": {
            return {
                ...state,
                fetchingBreweries: true
            }
        }
        case "RECEIVE_BREWERIES": {
            return {
                ...state,
                fetchingBreweries: false,
                fetchedBreweries: true,
                breweries: action.breweries
            }
        }
        case "BREWERIES_ERROR": {
            return {
                ...state,
                fetchingBreweries: false,
                error: action.error
            }
        }
        default: return state;
    }
}
