import React from 'react'
import { connect } from 'react-redux'
import ConnectedDesktopNavBar from '../containers/ConnectedDesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'
import ConnectedFavToggle from '../containers/ConnectedFavToggle.js'
import FavoriteBreweries from '../containers/FavoriteBreweries.js'
import FavoriteBrews from '../containers/FavoriteBrews.js'

class FavoritesView extends React.Component {
    render() {
        return (
            <div>
                <ConnectedDesktopNavBar />
                <ConnectedMobileNavBar />
                {
                    !this.props.isLoggedIn ?
                    (<p>please login</p>)
                    :
                    (this.props.favorites === 'brews') ?
                    (<div>
                        <ConnectedFavToggle />
                        <FavoriteBrews />
                    </div>
                    )
                    :
                    (
                    <div>
                        <ConnectedFavToggle />
                        <FavoriteBreweries />
                    </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        favorites: state.favorites,
        isLoggedIn: state.userId ? true : false
    }
)

FavoritesView = connect(mapStateToProps)(FavoritesView)

export default FavoritesView
