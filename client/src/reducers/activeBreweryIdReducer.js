export default function activeBreweryIdReducer(state = '', action) {
    switch(action.type) {
        case 'UPDATE_ACTIVE_BREWERY_ID': {
            return action.id
        }
        default: {
            return state
        }
    }
}
