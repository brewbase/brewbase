import React from 'react';
import {Link} from 'react-router';

const inputStyles = {
    border: '0',
    background: 'transparent',
    outline: '0',
    borderBottom: '1px solid black'
}

const SearchBar = (props) => {

    let coords;
    let input;
    function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    function showPosition(position) {
         let lat = position.coords.latitude
         let lng = position.coords.longitude
         coords = {lat, lng}
    }
    getLocation();
    return(
        <form>
            <Link to='searchResults'>
                <button onClick={() => props.handleUserInput(coords)}>
                    Locator
                </button>
            </Link>
            <input
                ref={node => input = node}
                type='text'
                style={inputStyles}
            >
            </input>
            <Link to='searchResults'>
                <input
                    onClick={() => props.handleUserInput(input.value)}
                    type='submit'
                >
                </input>
            </Link>
        </form>
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000
})(SearchBar)
