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
                style={inputStyles}
                placeholder='ex. Utah'
            >
            </input>
            <Link to='searchresults'>
                <input
                    onClick={() => props.handleUserInput(input.value)}
                    type='submit'
                    value='Search'
                >
                </input>
            </Link>
        </form>
    )
}

export default SearchBar
