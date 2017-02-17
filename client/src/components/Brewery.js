import React from 'react';
import { Link } from 'react-router';

const Brewery = (props) => (
    <Link to='/searchResults/moreinfo'>
        <div onClick={() => props.onBreweryClick(props.id)}>{props.name}</div>
    </Link>
);

export default Brewery;
