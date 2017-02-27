import React from 'react';
import Breweries from '../containers/Breweries.js';
import ConnectedDesktopNavBar from '../containers/ConnectedDesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'
import '../styles/main.css';

const SearchResultsView = (props) => (
    <div className="content">
        <ConnectedDesktopNavBar />
        <ConnectedMobileNavBar />
        <Breweries />
    </div>
)

export default SearchResultsView;
