export default function favoritesReducer(state = 'brews', action) {
    switch(action.type){
        case 'TOGGLE_FAVORITES': {
            if (state.favorites === 'brews') {
                return 'breweries'
            } else {
                return 'brews'
            }
        }
        default: {
            return state
        }
    }
}
