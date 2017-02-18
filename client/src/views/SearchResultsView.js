import React from 'react';
import Breweries from '../containers/Breweries.js';
import DesktopNavBar from '../components/DesktopNavBar.js'
import MobileNavBar from '../components/MobileNavBar.js'

const SearchResultsView = (props) => (
    <div>
        <DesktopNavBar />
        <Breweries />
        <MobileNavBar />
    </div>
)

export default SearchResultsView;
