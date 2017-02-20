import React from 'react'
import {Link} from 'react-router'
import '../styles/main.css'

const SearchBar = (props) => {
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
    return (
        <div className="searchPage">
            <form>
                <Link to='searchresults'>
                    <button
                        className="searchButton"
                        onClick={() => props.handleUserInput(coords)}>
                        <i className="material-icons md-light">location_on</i>
                    </button>
                </Link>
                <input
                    className="searchBar"
                    ref={node => input = node}
                    type='text'
                >
                </input>
                <Link to='searchresults'>
                    <button
                        className="searchButton"
                        onClick={() => props.handleUserInput(input.value)}>
                        <i className="material-icons md-light">search</i>
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default SearchBar
