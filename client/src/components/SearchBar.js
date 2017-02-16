import React from 'react';
import {Link} from 'react-router';
import TwentyOneAndOverBox from './TwentyOneAndOverBox';
import getLocation from './TwentyOneAndOverBox';
import showPosition from './TwentyOneAndOverBox';

const SearchBar = (props) => {
    function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    function showPosition(position) {
         let lat = position.coords.latitude
         let lng = position.coords.longitude
         coords = {lat, lng}
    }
    let coords;
    let input;
    getLocation();
    return(
        <form>
            <Link to='searchResults'><button onClick={() => props.handleUserInput(coords)}>Locator</button></Link>
            <input ref={node => input = node} type='text' style={{border: '0', background: 'transparent', outline: '0', borderBottom: '1px solid black'}}></input>
            <Link to='searchResults'><input onClick={() => props.handleUserInput(input.value)} type='submit'></input></Link>
        </form>
    )

};


export default SearchBar;
