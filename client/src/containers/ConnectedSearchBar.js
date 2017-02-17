import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar.js'
import updateUserInput from '../actions/updateUserInput.js'

const mapDispatchToProps = (dispatch) => ({
    handleUserInput: (input) => {
        dispatch(updateUserInput(input))
    }
})

const ConnectedSearchBar = connect(null, mapDispatchToProps)(SearchBar)

export default ConnectedSearchBar
