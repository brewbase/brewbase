import React from 'react';
import Breweries from '../containers/Breweries.js';
import DesktopNavBar from '../components/DesktopNavBar.js'
import MobileNavBar from '../components/MobileNavBar.js'
import '../styles/main.css';

const SearchResultsView = (props) => (
<div className="content">
    <div>
        <DesktopNavBar />
        <MobileNavBar />
        <Breweries />

    </div>
</div>
)

export default SearchResultsView;
