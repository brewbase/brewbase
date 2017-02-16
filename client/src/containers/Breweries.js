import React from 'react';
import {connect} from 'react-redux';
import Brewery from '../components/Brewery';
import getBreweries from '../actions/getBreweries.js';

class Breweries extends React.Component {
    componentDidMount() {
        console.log('logging', this.props.input)
        this.props.fetchBreweries(this.props.input)
    }
    render() {
        return (
            <div>
                {this.props.error
                    ? <div>{this.props.error.toString()}</div>
                    : null
                }
                {this.props.fetching
                    ? <div>Fetching</div>
                    : null
                }
                {this.props.breweries.map(b => (<Brewery name={b.brewery.name} key={b.brewery.id}/>))}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        breweries: state.breweries,
        error: state.breweriesError,
        fetching: state.fetchingBreweries,
        input: state.searchInput
    }
)

const mapDispatchToProps = (dispatch) => ({
    fetchBreweries: (input) => {
        dispatch(getBreweries(input))
    }
})

Breweries = connect(mapStateToProps, mapDispatchToProps)(Breweries)

export default Breweries
