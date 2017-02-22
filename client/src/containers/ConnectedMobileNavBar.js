import { connect } from 'react-redux'
import MobileNavBar from '../components/MobileNavBar.js'

const mapStateToProps = (state) => (
    {
        userId: state.userId
    }
)

const ConnectedMobileNavBar = connect(mapStateToProps)(MobileNavBar)

export default ConnectedMobileNavBar
