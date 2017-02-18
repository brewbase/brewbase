export default function favoriteBreweriesReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_BREWERY_TO_FAVORITES': {
            return [...state, action.brewery]
        }
        default: {
            return state
        }
    }
}
