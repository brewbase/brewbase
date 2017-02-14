export default function breweryErrorReducer(state = false, action){
    switch(action.type) {
        case "BREWERIES_ERROR": {
            return {
                ...state,
                breweryError: true
            }
        }
        default: return state;
    }
}
