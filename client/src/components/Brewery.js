import React from 'react';
import {Link} from 'react-router';

const Brewery = (props) => (
    <Link to='/searchresults/moreinfo'>
        <div onClick={props.onBreweryClick(props.id)}>
            {props.name}
        </div>
    </Link>
);

export default Brewery;
