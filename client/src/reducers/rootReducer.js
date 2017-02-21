import { combineReducers } from 'redux'
import breweriesReducer from './breweriesReducer.js'
import fetchingBreweriesReducer from './fetchingBreweriesReducer.js'
import breweryErrorReducer from './breweryErrorReducer.js'
import brewsReducer from './brewsReducer.js'
import fetchingBrewsReducer from './fetchingBrewsReducer.js'
import brewsErrorReducer from './brewsErrorReducer.js'
import activeBreweryReducer from './activeBreweryReducer.js'
import favoritesReducer from './favoritesReducer.js'
import favoriteBreweriesReducer from './favoriteBreweriesReducer.js'
import favoriteBrewsReducer from './favoriteBrewsReducer.js'

const rootReducer = combineReducers({
    breweries: breweriesReducer,
    fetchingBreweries: fetchingBreweriesReducer,
    breweryError: breweryErrorReducer,
    brews: brewsReducer,
    fetchingBrews: fetchingBrewsReducer,
    brewsError: brewsErrorReducer,
    activeBrewery: activeBreweryReducer,
    favorites: favoritesReducer,
    favoriteBreweries: favoriteBreweriesReducer,
    favoriteBrews: favoriteBrewsReducer
})

export default rootReducer
