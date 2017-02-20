import React from 'react'
import { connect } from 'react-redux'
import Brewery from '../components/Brewery.js'
import updateActiveBrewery from '../actions/updateActiveBrewery.js'
import updateFavoriteBreweries from '../actions/updateFavoriteBreweries.js'
import { getFavoriteBreweryIds } from '../reducers/selectors.js'
import '../styles/main.css'

class FavoriteBreweries extends React.Component {
    render() {
        return (
            <div className='breweryResultsContainer'>
                {this.props.favoriteBreweries.map((b, i) => (
                    <Brewery
                        key={i}
                        onBreweryClick={this.props.onBreweryClick}
                        onStarClick={this.props.onStarClick}
                        brewery={b}
                        isFavorited={this.props.favoriteBreweryIds.includes(b.brewery.id)}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        favoriteBreweries: state.favoriteBreweries,
        favoriteBreweryIds: getFavoriteBreweryIds(state)
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onBreweryClick: (brewery) => {
            dispatch(updateActiveBrewery(brewery))
        },
        onStarClick: (brewery) => {
            dispatch(updateFavoriteBreweries(brewery))
        }
    }
)

FavoriteBreweries = connect(mapStateToProps, mapDispatchToProps)(FavoriteBreweries)

export default FavoriteBreweries
