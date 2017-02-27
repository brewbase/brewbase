import { connect } from 'react-redux'
import DesktopNavBar from '../components/DesktopNavBar.js'

const mapStateToProps = (state) => (
    {
        userId: state.userId
    }
)

const ConnectedDesktopNavBar = connect(mapStateToProps)(DesktopNavBar)

export default ConnectedDesktopNavBar
