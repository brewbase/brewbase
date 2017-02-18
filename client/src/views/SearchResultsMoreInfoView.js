import React from 'react'
import DesktopNavBar from '../components/DesktopNavBar.js'
import MobileNavBar from '../components/MobileNavBar.js'
import ConnectedBreweryInfo from '../containers/ConnectedBreweryInfo.js'
import '../styles/main.css'

const SearchResultsMoreInfoView = (props) => (
    <div className='content'>
        <DesktopNavBar />
        <MobileNavBar />
        <ConnectedBreweryInfo />
    </div>
)

export default SearchResultsMoreInfoView
