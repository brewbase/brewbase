import React from 'react';
import {connect} from 'react-redux';
import Brewery from '../components/Brewery';
import getBreweries from '../actions/getBreweries';

class Breweries extends React.Component {
    render() {
        return(
            <div>
                <button onClick={() => this.props.handleBreweryOnClick('DENVER')}>
                    Get Breweries
                </button>
                {
                    this.props.error ?
                    <div>{this.props.error.toString()}</div> :
                    null
                }
                {
                    this.props.fetching ?
                    <div>Fetching</div> :
                    null
                }
                {this.props.breweries.map(b => (
                    <Brewery
                        name={b.brewery.name}
                        key={b.brewery.id}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        breweries: state.breweries,
        error: state.breweriesError,
        fetching: state.fetchingBreweries
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleBreweryOnClick: (input) => {
            dispatch(getBreweries(input))
        }
    }
)

Breweries = connect(mapStateToProps, mapDispatchToProps)(Breweries)

export default Breweries
