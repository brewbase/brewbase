import React from 'react'
import {Link} from 'react-router'

const MobileNavBar = () => (
    <div>
        <div className="headerMobile">BREWBASE</div>
        <footer className='navMobile'>
            <Link to='/'>
            <i className='material-icons md-light'>home</i>
            </Link>

            <Link to='/search'>
            <i className='material-icons md-light'>search</i>
            </Link>

            <Link to='/favorites'>
            <i className='material-icons md-light star'>starrate</i>
            </Link>
            
            <Link href='/profile'>
                <i className='material-icons md-light'>account_circle</i>
            </Link>

        </footer>
    </div>
)

export default MobileNavBar
