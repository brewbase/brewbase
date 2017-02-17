import React from 'react'
import { Link } from 'react-router'
import { geolocated } from 'react-geolocated'

const SearchBarStyles = {
    border: '0',
    background: 'transparent',
    outline: '0',
    borderBottom: '1px solid black'
}

const SearchBar = (props) => {
    let input
    return (
        <form>
            <Link to='searchResults'>
                <button
                    onClick={() => props.handleUserInput(
                        {
                            lat: props.coords.latitude,
                            lng: props.coords.longitude
                        }
                    )}
                >
                    Locator
                </button>
            </Link>
            <input
                ref={node => input = node}
                type='text'
                style={SearchBarStyles}
            >
            </input>
            <Link to='searchResults'>
                <input
                    type='submit'
                    onClick={() => props.handleUserInput(input.value)}
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
