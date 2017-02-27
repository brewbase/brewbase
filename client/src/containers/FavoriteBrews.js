import React from 'react'
import { connect } from 'react-redux'
import Brews from '../components/Brews.js'
import deletingFavoriteBeer from '../actions/deletingFavoriteBeer.js'
import getFavoriteBrews from '../actions/getFavoriteBrews.js'
import { getFavoriteBrewIds } from '../reducers/selectors.js'
import '../styles/main.css'

class FavoriteBrews extends React.Component {
    componentDidMount() {
        this.props.getFavoriteBrews(this.props.userId)
    }
    render() {
        return (
            <div className='breweryResultsContainerFavorites'>
                <Brews
                    onUnfavoriteStarClick={this.props.onUnfavoriteStarClick}
                    brews={this.props.favoriteBrews}
                    favoriteBrewIds={this.props.favoriteBrewIds}
                    userId={this.props.userId}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        favoriteBrews: state.favoriteBrews,
        favoriteBrewIds: getFavoriteBrewIds(state),
        userId: state.userId
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onUnfavoriteStarClick: (brew, userId) => {
            dispatch(deletingFavoriteBeer(brew, userId))
        },
        getFavoriteBrews: (userid) => {
            dispatch(getFavoriteBrews(userid))
        }
    }
)

FavoriteBrews = connect(mapStateToProps, mapDispatchToProps)(FavoriteBrews)

export default FavoriteBrews
