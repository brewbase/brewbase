import React from 'react'
import DesktopNavBar from '../components/DesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'
import loginUser from '../actions/loginUser.js'
import { connect } from 'react-redux';
import getUserData from '../actions/getUserData.js'

class ProfileView extends React.Component {
    render() {
        return (
            <div>
                <DesktopNavBar/>
                <ConnectedMobileNavBar/>
                {
                    this.context.router.location.query.id && !this.props.isLoggedIn ? this.props.login(this.context.router.location.query.id)
                    :
                    this.props.userData.name ? null : this.props.fetchUserData(this.context.router.location.query.id)
                }
                <div>
                 <h1> WELCOME </h1>
                 {this.props.userData.name}</div>
            </div>
        )
    }
}

ProfileView.contextTypes = {
    router: React.PropTypes.object
}

const mapStateToProps = (state) => (
    {
        isLoggedIn: state.userId ? true : false,
        userData: state.userData
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        login: (userId) => {
            dispatch(loginUser(userId))
        },
        fetchUserData: (userId) => {
         dispatch(getUserData(userId))
        }
    }
)

ProfileView = connect(mapStateToProps, mapDispatchToProps)(ProfileView)

export default ProfileView
