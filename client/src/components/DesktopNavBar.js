import React from 'react'
import {Link} from 'react-router'

const DesktopNavBar = (props) => (
    <div className='desktopNav'>
        <span className='companyName'></span>
        <div className='rightSideItems'>
            <Link to='/searchresults'>
                <span className='companyName'>BREWBASE</span>
            </Link>
            <Link to='/search'>
                <span className='searchText'>Search</span>
            </Link>
            <Link to='/favorites'>
                <span className='favoritesText'>Favorites</span>
            </Link>
            <Link to='/profile'>
                <i className="material-icons md-light actCircle">account_circle</i>
            </Link>
        </div>
    </div>
)

export default DesktopNavBar
