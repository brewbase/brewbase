import React from 'react'
import { connect } from 'react-redux'
import Brews from '../components/Brews.js'
import updateFavoriteBrews from '../actions/updateFavoriteBrews.js'
import { getFavoriteBrewIds } from '../reducers/selectors.js'
import '../styles/main.css'

class FavoriteBrews extends React.Component {
    render() {
        return (
            <div className='breweryResultsContainer'>
                <Brews
                    onStarClick={this.props.onStarClick}
                    brews={this.props.favoriteBrews}
                    favoriteBrewIds={this.props.favoriteBrewIds}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        favoriteBrews: state.favoriteBrews,
        favoriteBrewIds: getFavoriteBrewIds(state)
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onStarClick: (brewery) => {
            dispatch(updateFavoriteBrews(brewery))
        }
    }
)

FavoriteBrews = connect(mapStateToProps, mapDispatchToProps)(FavoriteBrews)

export default FavoriteBrews
