import React from 'react';
import {connect} from 'react-redux';
import Brewery from '../components/Brewery.js';
import getBreweries from '../actions/getBreweries.js';
import updateActiveBrewery from '../actions/updateActiveBrewery.js';
import addBreweryToFavorites from '../actions/addBreweryToFavorites.js';
import { getFavoriteBreweryIds } from '../reducers/selectors.js';
import '../styles/main.css';

class Breweries extends React.Component {
    componentDidMount() {
        this.props.fetchBreweries(this.props.input)
    }
    renderBreweries = () => (
        this.props.breweries.map((b, i) => (
            <Brewery
                key={i}
                onBreweryClick={this.props.onBreweryClick}
                onStarClick={this.props.onStarClick}
                brewery={b}
                isFavorited={this.props.favoriteBreweryIds.includes(b.brewery.id)}
            />
        ))
    )
    render() {
        return (
            <div>
                {this.props.error
                    ? <div>{this.props.error.toString()}</div>
                    : null
                }
                {this.props.fetching
                    ? <div>Fetching</div>
                    : null
                }
                {this.renderBreweries()}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        breweries: state.breweries,
        error: state.breweriesError,
        fetching: state.fetchingBreweries,
        input: state.searchInput,
        favoriteBreweryIds: getFavoriteBreweryIds(state)
    }
)

const mapDispatchToProps = (dispatch) => ({
    fetchBreweries: (input) => {
        dispatch(getBreweries(input))
    },
    onBreweryClick: (brewery) => {
        dispatch(updateActiveBrewery(brewery))
    },
    onStarClick: (brewery) => {
        dispatch(addBreweryToFavorites(brewery))
    }
})

Breweries = connect(mapStateToProps, mapDispatchToProps)(Breweries)

export default Breweries
