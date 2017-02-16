import React from 'react'
import {connect} from 'react-redux'

class BreweryInfo extends React.Component {
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

BreweryInfo = connect(mapStateToProps)(BreweryInfo)

export default BreweryInfo
