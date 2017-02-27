import React from 'react'
import ConnectedSearchBar from '../containers/ConnectedSearchBar.js'
import ConnectedDesktopNavBar from '../containers/ConnectedDesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'

const SearchView = (props) => (
    <div>
        <ConnectedDesktopNavBar />
        <ConnectedMobileNavBar />
        <div className="searchPage">
            <div className="searchBox">
                <ConnectedSearchBar />
            </div>
        </div>
    </div>
)

export default SearchView
