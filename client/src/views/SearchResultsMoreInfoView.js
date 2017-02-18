import React from 'react'
import DesktopNavBar from '../components/DesktopNavBar.js'
import MobileNavBar from '../components/MobileNavBar.js'
import ConnectedBreweryInfo from '../containers/ConnectedBreweryInfo.js'

const SearchResultsMoreInfoView = (props) => (
    <div>
        <DesktopNavBar />
        <ConnectedBreweryInfo />
        <MobileNavBar />
    </div>
)

export default SearchResultsMoreInfoView
