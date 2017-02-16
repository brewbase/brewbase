import {combineReducers} from 'redux';
import breweriesReducer from './breweriesReducer';
import fetchingBreweriesReducer from './fetchingBreweriesReducer';
import breweryErrorReducer from './breweryErrorReducer';
import searchInputReducer from './searchInputReducer';

const rootReducer = combineReducers({
    breweries: breweriesReducer,
    fetchingBreweries: fetchingBreweriesReducer,
    breweryError: breweryErrorReducer,
    searchInput: searchInputReducer
});

export default rootReducer;
