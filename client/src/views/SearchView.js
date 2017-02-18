import React from 'react'
import ConnectedSearchBar from '../containers/ConnectedSearchBar.js'
import DesktopNavBar from '../components/DesktopNavBar.js'
import MobileNavBar from '../components/MobileNavBar.js'

const SearchView = (props) => (
    <div>
        <DesktopNavBar />
        <MobileNavBar />
        <ConnectedSearchBar />
    </div>
)

export default SearchView
