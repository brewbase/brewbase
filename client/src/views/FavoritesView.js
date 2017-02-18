import React from 'react'
import DesktopNavBar from '../components/DesktopNavBar.js'
import MobileNavBar from '../components/MobileNavBar.js'
import ConnectedFavToggle from '../containers/ConnectedFavToggle.js'

const FavoritesView = (props) => (
    <div>
        <DesktopNavBar />
        <MobileNavBar />
        <ConnectedFavToggle />
    </div>
)

export default FavoritesView
