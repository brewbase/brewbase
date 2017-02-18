import { connect } from 'react-redux'
import FavToggle from '../components/FavToggle.js'
import toggleFavorites from '../actions/toggleFavorites.js'

const mapStateToProps = (state) => (
    {
        favorites: state.favorites
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleToggleClick: () => {
            dispatch(toggleFavorites())
        }
    }
)

const ConnectedFavToggle = connect(mapStateToProps, mapDispatchToProps)(FavToggle)

export default ConnectedFavToggle
