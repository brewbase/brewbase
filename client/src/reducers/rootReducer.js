import {combineReducers} from 'redux'
import breweriesReducer from './breweriesReducer';
import fetchingBreweriesReducer from './fetchingBreweriesReducer'
import fetchedBreweriesReducer from './fetchedBreweriesReducer'
import breweryErrorReducer from './breweryErrorReducer'

const rootReducer = combineReducers({
    breweries: breweriesReducer,
    fetchingBreweries: fetchingBreweriesReducer,
    fetchedBreweries: fetchedBreweriesReducer,
    breweryError: breweryErrorReducer
});

export default rootReducer;
