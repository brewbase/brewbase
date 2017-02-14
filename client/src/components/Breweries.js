import React from 'react';
import Brewery from './Brewery';
import getBreweries from '../reducers/selectors';
import {connect} from 'react-redux';

class Breweries extends React.Component {
    render(){
        return(
            <div>
                {this.props.breweries.map(b => {
                    <Brewery
                        key={b.id}
                        name={b.name}
                    />
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        breweries: getBreweries(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        shit: 'fuck'
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Breweries);
