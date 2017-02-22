import React from 'react'
import DesktopNavBar from '../components/DesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'
import ConnectedBreweryInfo from '../containers/ConnectedBreweryInfo.js'
import '../styles/main.css'

const SearchResultsMoreInfoView = (props) => (
    <div className='content'>
        <DesktopNavBar />
        <ConnectedMobileNavBar />
        <ConnectedBreweryInfo />
    </div>
)

export default SearchResultsMoreInfoView
