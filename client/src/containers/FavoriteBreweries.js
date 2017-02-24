import React from 'react'
import { connect } from 'react-redux'
import Brewery from '../components/Brewery.js'
import updateActiveBrewery from '../actions/updateActiveBrewery.js'
import updateFavoriteBreweries from '../actions/updateFavoriteBreweries.js'
import deletingFavoriteBrewery from '../actions/deletingFavoriteBrewery.js';
import getFavoriteBreweries from '../actions/getFavoriteBreweries.js';
import { getFavoriteBreweryIds } from '../reducers/selectors.js'
import '../styles/main.css'

class FavoriteBreweries extends React.Component {
    componentDidMount() {
        this.props.getFavoriteBreweries(this.props.userId)
    }
    render() {
        return (
            <div className='breweryResultsContainerFavorites'>
                <div className='cardHolderContainer'>
                {this.props.favoriteBreweries.map((b, i) => (
                    <Brewery
                        key={i}
                        onBreweryClick={this.props.onBreweryClick}
                        onUnfavoriteStarClick={this.props.onUnfavoriteStarClick}
                        brewery={b}
                        isFavorited={this.props.favoriteBreweryIds.includes(b.brewery.id)}
                        userid={this.props.userId}
                    />
                ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        favoriteBreweries: state.favoriteBreweries,
        favoriteBreweryIds: getFavoriteBreweryIds(state),
        userId: state.userId
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onBreweryClick: (brewery) => {
            dispatch(updateActiveBrewery(brewery))
        },
        onUnfavoriteStarClick: (brewery, userid) => {
            dispatch(deletingFavoriteBrewery(brewery, userid))
        },
        getFavoriteBreweries: (userid) => {
            dispatch(getFavoriteBreweries(userid))
        }
    }
)

FavoriteBreweries = connect(mapStateToProps, mapDispatchToProps)(FavoriteBreweries)

export default FavoriteBreweries
