import React from 'react'
import ConnectedDesktopNavBar from '../containers/ConnectedDesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'
import ConnectedBreweryInfo from '../containers/ConnectedBreweryInfo.js'
import '../styles/main.css'

const SearchResultsMoreInfoView = (props) => (
    <div className='content'>
        <ConnectedDesktopNavBar />
        <ConnectedMobileNavBar />
        <ConnectedBreweryInfo />
    </div>
)

export default SearchResultsMoreInfoView
