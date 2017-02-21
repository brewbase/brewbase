import {connect} from 'react-redux';
import SearchBar from '../components/SearchBar.js';
import getBreweries from '../actions/getBreweries.js';

const mapDispatchToProps = (dispatch) => ({
    handleUserInput: (input) => {
        dispatch(getBreweries(input))
    }
})

const ConnectedSearchBar = connect(null, mapDispatchToProps)(SearchBar)

export default ConnectedSearchBar
