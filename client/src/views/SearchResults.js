import React from 'react';
import Brewery from '../components/Brewery';
import {Link} from 'react-router';

class SearchResults extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div><Brewery/></div>
        )
    }
}

export default SearchResults;
