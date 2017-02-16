export default function searchInputReducer(state = '', action) {
    switch(action.type){
        case "UPDATE_USER_INPUT": {
            return action.input
        }
        default: {
            return state
        }
    }
}
