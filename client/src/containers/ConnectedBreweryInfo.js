import React from 'react'
import {connect} from 'react-redux'
import BreweryInfo from '../components/BreweryInfo.js'
import getBrews from '../actions/getBrews.js'

class ConnectedBreweryInfo extends React.Component {
    componentDidMount() {
        this.props.fetchBrews(this.props.brewery.brewery.id)
    }
    render() {
        return(
            <BreweryInfo brewery={this.props.brewery} />
        )
    }
}

const mapStateToProps = (state) => (
    {
        brewery: state.activeBrewery
    }
)

const mapDispatchToProps = (dispatch) => ({
    fetchBrews: (id) => {
        dispatch(getBrews(id))
    }
})

ConnectedBreweryInfo = connect(mapStateToProps, mapDispatchToProps)(ConnectedBreweryInfo)

export default ConnectedBreweryInfo
