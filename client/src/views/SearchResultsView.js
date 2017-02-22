import React from 'react';
import Breweries from '../containers/Breweries.js';
import DesktopNavBar from '../components/DesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'
import '../styles/main.css';

const SearchResultsView = (props) => (
    <div className="content">
        <DesktopNavBar />
        <ConnectedMobileNavBar />
        <Breweries />
    </div>
)

export default SearchResultsView;
