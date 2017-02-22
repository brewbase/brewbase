import React from 'react'
import { connect } from 'react-redux'
import DesktopNavBar from '../components/DesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'
import ConnectedFavToggle from '../containers/ConnectedFavToggle.js'
import FavoriteBreweries from '../containers/FavoriteBreweries.js'
import FavoriteBrews from '../containers/FavoriteBrews.js'

class FavoritesView extends React.Component {
    render() {
        return (
            <div>
                <DesktopNavBar />
                <ConnectedMobileNavBar />
                <ConnectedFavToggle />
                {this.props.favorites === 'brews' ?
                (<FavoriteBrews />) :
                (<FavoriteBreweries />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        favorites: state.favorites
    }
)

FavoritesView = connect(mapStateToProps)(FavoritesView)

export default FavoritesView
