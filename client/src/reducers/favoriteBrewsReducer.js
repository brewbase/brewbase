import { getFavoriteBrewIds } from './selectors.js'

export default function favoriteBrewsReducer(state = [], action) {
    switch(action.type) {
        case 'UPDATE_FAVORITE_BREWS': {
            const favoriteBrewIds = getFavoriteBrewIds(state)
            if (favoriteBrewIds.includes(action.brew.id)) {
                const brewIndex = state.findIndex(
                    b => b.id === action.brew.id
                )
                return [
                    ...state.slice(0, brewIndex),
                    ...state.slice(brewIndex + 1, state.length)
                ]
            } else {
                return [...state, action.brew]
            }
        }
        default: {
            return state
        }
    }
}
