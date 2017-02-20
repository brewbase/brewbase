import { getFavoriteBreweryIds } from './selectors.js'

export default function favoriteBreweriesReducer(state = [], action) {
    switch(action.type) {
        case 'UPDATE_FAVORITE_BREWERIES': {
            const favoriteBreweryIds = getFavoriteBreweryIds(state)
            if (favoriteBreweryIds.includes(action.brewery.brewery.id)) {
                const breweryIndex = state.findIndex(
                    b => b.brewery.id === action.brewery.brewery.id
                )
                return [
                    ...state.slice(0, breweryIndex),
                    ...state.slice(breweryIndex + 1, state.length)
                ]
            } else {
                return [...state, action.brewery]
            }
        }
        default: {
            return state
        }
    }
}
