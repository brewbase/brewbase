export default function breweryErrorReducer(state = '', action) {
    switch(action.type) {
        case 'UPDATE_ACTIVE_BREWERY': {
            return action.id
        }
        default: {
            return state
        }
    }
}
