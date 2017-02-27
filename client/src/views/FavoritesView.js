import React from 'react'
import { connect } from 'react-redux'
import DesktopNavBar from '../components/DesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'
import ConnectedFavToggle from '../containers/ConnectedFavToggle.js'
import FavoriteBreweries from '../containers/FavoriteBreweries.js'
import FavoriteBrews from '../containers/FavoriteBrews.js'
import logo from '../media/logo.png'
import '../styles/main.css'

class FavoritesView extends React.Component {
    render() {
        return (
            <div>
                <DesktopNavBar />
                <ConnectedMobileNavBar />
                {
                    !this.props.isLoggedIn ?
                    (<div className="splashPage">
                        <img src={logo} alt="logo" className="logo"></img>
                        <h3 style={{color: 'white', textAlign: 'center'}}>Please login to view your favorite craft beers and breweries!</h3>
                    </div>)
                    :
                    (this.props.favorites === 'brews') ?
                    (<div>
                        <ConnectedFavToggle />
                        <FavoriteBrews />
                    </div>)
                    :
                    (<div>
                        <ConnectedFavToggle />
                        <FavoriteBreweries />
                    </div>)
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
