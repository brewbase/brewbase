import React from 'react'
import DesktopNavBar from '../components/DesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'
import loginUser from '../actions/loginUser.js'
import { connect } from 'react-redux'

class ProfileView extends React.Component {
    render() {
        return (
            <div>
                <DesktopNavBar/>
                <ConnectedMobileNavBar/>
                {console.log(this.props.isLoggedIn)}
                {this.context.router.location.query.id && !this.props.isLoggedIn ? this.props.login(this.context.router.location.query.id) : null}
            </div>
        )
    }
}

ProfileView.contextTypes = {
    router: React.PropTypes.object
}

const mapStateToProps = (state) => (
    {
        isLoggedIn: state.userId ? true : false
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        login: (userId) => {
            dispatch(loginUser(userId))
        }
    }
)

ProfileView = connect(mapStateToProps, mapDispatchToProps)(ProfileView)

export default ProfileView
