import React from 'react'
import ConnectedSearchBar from '../containers/ConnectedSearchBar.js'
import DesktopNavBar from '../components/DesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'

const SearchView = (props) => (
    <div>
        <DesktopNavBar />
        <ConnectedMobileNavBar />
        <div className="searchPage">
            <div className="searchBox">
                <ConnectedSearchBar />
            </div>
        </div>
    </div>
)

export default SearchView
