import React from 'react'
import {Link} from 'react-router'
import '../styles/main.css'

const SearchBar = (props, context) => {
    let path = context.router.location.pathname
    let coords
    let input
    function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    function showPosition(position) {
        let lat = position.coords.latitude
        let lng = position.coords.longitude
        coords = {lat, lng}
    }
    getLocation()
    const changeClass = {
        colorChange: function () {
            switch (path) {
                case '/search':
                    return 'material-icons md-light';
                case '/searchresults':
                    return 'material-icons md-dark';
                default:
                    return 'material-icons md-dark';
            }
        },
        getClassBar: function (){
            switch (path) {
                case '/search':
                    return 'searchBar';
                case '/searchresults':
                    return 'resultsSearchBar';
                default:
                    return 'resultsSearchBar';
            }
        },
        getLocationButton: function () {
            switch (path) {
                case '/search':
                    return 'searchButton';
                case '/searchresults':
                    return 'resultsSearchButton';
                default:
                    return 'resultsSearchButton';
            }
        },
        getSearchButton: function () {
            switch (path) {
                case '/search':
                    return 'locationButton';
                case '/searchresults':
                    return 'resultsLocationButton';
                default:
                    return 'resultsLocationButton';
            }
        }
    }
    return (
        <form>
            <Link to='searchresults'>
                <button
                    className={changeClass.getLocationButton()}
                    onClick={() => props.handleUserInput(coords)}>
                    <i className={changeClass.colorChange()}>location_on</i>
                </button>
            </Link>
            <input
                className={changeClass.getClassBar()}
                ref={node => input = node}
                type='text'
            >
            </input>
            <Link to='searchresults'>
                <button
                    className={changeClass.getSearchButton()}
                    onClick={() => props.handleUserInput(input.value)}>
                    <i className={changeClass.colorChange()}>search</i>
                </button>
            </Link>
        </form>
    )
}

SearchBar.contextTypes = {
    router: React.PropTypes.object
}

export default SearchBar
