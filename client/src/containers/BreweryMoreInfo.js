import React from 'react'
import { connect } from 'react-redux'
import getBrews from '../actions/getBrews.js'

class BreweryMoreInfo extends React.Component {
    componentDidMount() {
        this.props.fetchBrews(this.props.id)
    }
    render() {
        return (
            <div>
                {this.props.id}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        id: state.activeBreweryId
    }
);

const mapDispatchToProps = (dispatch) => ({
    fetchBrews: (id) => {
        dispatch(getBrews(id))
    }
});

BreweryMoreInfo = connect(mapStateToProps, mapDispatchToProps)(BreweryMoreInfo)

export default BreweryMoreInfo
