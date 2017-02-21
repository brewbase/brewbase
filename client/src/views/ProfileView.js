import React from 'react'
import DesktopNavBar from '../components/DesktopNavBar.js'
import MobileNavBar from '../components/MobileNavBar.js'
import axios from 'axios';

// let response
function showProfile() {
    axios.get('/users/facebook%7C10154619025621865#_=_').then((response) => console.log(response))
}

const ProfileView = module.exports = (props) => (
    <div>
        <DesktopNavBar/>
        <MobileNavBar/>
        <button onClick={() => showProfile()}>CLICK ME</button>
        <div></div>

    </div>
);

// const ConnectedProfileView = connect(mapStateToProps)(ProfileView)
export default ProfileView
