export default function activeBreweryReducer(state = {}, action) {
    switch(action.type) {
        case 'UPDATE_ACTIVE_BREWERY': {
            return action.brewery
        }
        default: {
            return state
        }
    }
}
