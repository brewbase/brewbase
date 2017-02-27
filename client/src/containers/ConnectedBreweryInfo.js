import React from 'react'
import { connect } from 'react-redux'
import BreweryInfo from '../components/BreweryInfo.js'
import getBrews from '../actions/getBrews.js'
import postingFavoriteBeer from '../actions/postingFavoriteBeer.js'
import deletingFavoriteBeer from '../actions/deletingFavoriteBeer.js'
import { getFavoriteBrewIds } from '../reducers/selectors.js'

class ConnectedBreweryInfo extends React.Component {
    componentDidMount() {
        this.props.fetchBrews(this.props.brewery.brewery.id)
    }
    render() {
        return(
            <BreweryInfo
                brewery={this.props.brewery}
                brews={this.props.brews}
                fetching={this.props.fetching}
                error={this.props.error}
                favoriteBrewIds={this.props.favoriteBrewIds}
                onFavoriteStarClick={this.props.onFavoriteStarClick}
                onUnfavoriteStarClick={this.props.onUnfavoriteStarClick}
                userId={this.props.userId}
            />
        )
    }
}

const mapStateToProps = (state) => (
    {
        brewery: state.activeBrewery,
        brews: state.brews,
        error: state.breweriesError,
        fetching: state.fetchingBreweries,
        favoriteBrewIds: getFavoriteBrewIds(state),
        userId: state.userId
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        fetchBrews: (id) => {
            dispatch(getBrews(id))
        },
        onFavoriteStarClick: (beer, userId) => {
            dispatch(postingFavoriteBeer(beer, userId))
        },
        onUnfavoriteStarClick: (beer, userId) => {
            dispatch(deletingFavoriteBeer(beer, userId))
        }
    }
)

ConnectedBreweryInfo = connect(mapStateToProps, mapDispatchToProps)(ConnectedBreweryInfo)

export default ConnectedBreweryInfo
