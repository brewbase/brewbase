import React from 'react'
import {connect} from 'react-redux'
import getSingleBrewery from '../actions/getSingleBrewery.js';

class BreweryInfo extends React.Component {
    componentDidMount() {
        this.props.fetchSingleBrewery(this.props.id)
}
    render() {
        return(
            <div>
                {this.props.id}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        id: state.activeBrewery
    }
);

const mapDispatchToProps = (dispatch) => ({
    fetchSingleBrewery: (id) => {
        dispatch(getSingleBrewery(id))
    }
})

BreweryInfo = connect(mapStateToProps, mapDispatchToProps)(BreweryInfo)

export default BreweryInfo
