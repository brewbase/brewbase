import React from 'react'
import { connect } from 'react-redux'
import BreweryInfo from '../components/BreweryInfo.js'
import getBrews from '../actions/getBrews.js'
import updateFavoriteBrews from '../actions/updateFavoriteBrews.js'
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
                onStarClick={this.props.onStarClick}
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
        favoriteBrewIds: getFavoriteBrewIds(state)
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        fetchBrews: (id) => {
            dispatch(getBrews(id))
        },
        onStarClick: (brew) => {
            dispatch(updateFavoriteBrews(brew))
        }
    }
)

ConnectedBreweryInfo = connect(mapStateToProps, mapDispatchToProps)(ConnectedBreweryInfo)

export default ConnectedBreweryInfo
