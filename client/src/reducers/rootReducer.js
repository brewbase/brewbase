import {combineReducers} from 'redux'
import breweriesReducer from './breweriesReducer';
import fetchingBreweriesReducer from './fetchingBreweriesReducer'
import breweryErrorReducer from './breweryErrorReducer'

const rootReducer = combineReducers({
    breweries: breweriesReducer,
    fetchingBreweries: fetchingBreweriesReducer,
    breweryError: breweryErrorReducer
});

export default rootReducer;
