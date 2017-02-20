import React from 'react'
import {Link} from 'react-router'
import '../styles/main.css'

const DesktopNavBar = (props) => (
    <div className='desktopNav'>
        <Link className="headerLink" to='/search'>
            <span className='companyName'>BREWBASE</span>
        </Link>
        <div className='rightSideItems'>
            <Link className="headerLink" to='/search'>
                <span className='searchText'>Search</span>
            </Link>
            <Link className="headerLink" to='/favorites'>
                <span className='favoritesText'>Favorites</span>
            </Link>
            <Link to='/profile'>
                <i className="material-icons md-light actCircle">account_circle</i>
            </Link>
        </div>
    </div>
)

export default DesktopNavBar
