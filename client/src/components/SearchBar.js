import React from 'react';
import {Link} from 'react-router';

const SearchBar = (props) => {
    let input;
    return(
        <form>
            <button></button>
            <input ref={node => input = node} type='text' style={{border: '0', background: 'transparent', outline: '0', borderBottom: '1px solid black'}}></input>
            <Link to='searchResults'><input onClick={() => props.handleUserInput(input.value)} type='submit'></input></Link>
        </form>
    )
};

export default SearchBar
