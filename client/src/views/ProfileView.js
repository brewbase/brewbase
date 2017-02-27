import React from 'react'
import ConnectedDesktopNavBar from '../containers/ConnectedDesktopNavBar.js'
import ConnectedMobileNavBar from '../containers/ConnectedMobileNavBar.js'
import loginUser from '../actions/loginUser.js'
import { connect } from 'react-redux';
import getUserData from '../actions/getUserData.js'
import '../styles/main.css';

class ProfileView extends React.Component {
    componentWillMount() {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <ConnectedDesktopNavBar />
                <ConnectedMobileNavBar />
                {
                    this.context.router.location.query.id && !this.props.isLoggedIn ? this.props.login(this.context.router.location.query.id)
                    :
                    this.props.userData.name ? null : this.props.fetchUserData(this.context.router.location.query.id)
                }
                <div className="profileContainer">
                    <div className='userDataContainer'>
                     <img className='userProfilePic' src={this.props.userData.imgUrl} alt="profile"></img>
                     <h2> {this.props.userData.name} </h2>
                     <hr></hr>
                     <p> Artisan migas salvia master cleanse, gluten-free fingerstache skateboard cronut authentic hell of blog paleo mixtape. Selvage kombucha austin, normcore pork belly cronut asymmetrical tousled iPhone pour-over.</p>
                    </div>
                    <div className='favoritesDesc'> Favorite Breweries: 12 <br/><br/> Favorite Brews: 4</div>
                    <div className='logoutButton'>
                        <a href='//localhost:4000/logout'><button> SIGN OUT </button></a>
                    </div>
                </div>
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
