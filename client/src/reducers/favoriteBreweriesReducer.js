export default function favoriteBreweriesReducer(state = [], action) {
    switch(action.type){
        case 'ADD_BREWERY_TO_FAVORITES': {
            const newArray = state.slice(0);
            return newArray.push(action.brewery);
        }
        default: {
            return state
        }
    }
}
