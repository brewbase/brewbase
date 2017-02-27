import React from 'react'
import logo from '../media/logo.png'
import '../styles/main.css'

const Sorry = (props) => (
    <div className="splashPage">
        <img src={logo} alt="logo" className="logo"></img>
        <h3 style={{color: 'white'}}>Sorry, please come back when you're 21!</h3>
    </div>
)

export default Sorry
