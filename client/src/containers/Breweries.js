import React from 'react'
import { connect } from 'react-redux'
import Brewery from '../components/Brewery.js'
import ConnectedSearchBar from '../containers/ConnectedSearchBar.js'
import updateActiveBrewery from '../actions/updateActiveBrewery.js'
import deletingFavoriteBrewery from '../actions/deletingFavoriteBrewery.js'
import postingFavoriteBrewery from '../actions/postingFavoriteBrewery.js'
import { getFavoriteBreweryIds } from '../reducers/selectors.js'
import '../styles/main.css'

class Breweries extends React.Component {
    renderBreweries = () => (
        this.props.breweries.map((b, i) => (
            <Brewery
                key={i}
                onBreweryClick={this.props.onBreweryClick}
                onFavoriteStarClick={this.props.onFavoriteStarClick}
                onUnfavoriteStarClick={this.props.onUnfavoriteStarClick}
                brewery={b}
                isFavorited={this.props.favoriteBreweryIds.includes(b.brewery.id)}
                userid={this.props.userid}
            />
        ))
    )
    render() {
        return (
            <div>
            <div className="searchResultsContainer">
                  <div className="resultsSearchBarContainer">
                    <h3 className="findABrewery">Find a Brewery</h3>
                    <ConnectedSearchBar/>
                  </div>
              </div>
            <div className='breweryResultsContainer'>
                {this.props.error
                    ? <div>{this.props.error.toString()}</div>
                    : null
                }
                {this.props.fetching
                    ? <div>Finding breweries...</div>
                    : null
                }
                {this.renderBreweries()}
            </div>
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
        favoriteBreweryIds: getFavoriteBreweryIds(state),
        userid: state.userId
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onBreweryClick: (brewery) => {
            dispatch(updateActiveBrewery(brewery))
        },
        onFavoriteStarClick: (brewery, userid) => {
            dispatch(postingFavoriteBrewery(brewery, userid))
        },
        onUnfavoriteStarClick: (brewery, userid) => {
            dispatch(deletingFavoriteBrewery(brewery, userid))
        }
    }
)

Breweries = connect(mapStateToProps, mapDispatchToProps)(Breweries)

export default Breweries
