import React from 'react'

const MobileNavBar = () => (
    <div>
        <div className="headerMobile">BREWBASE</div>
        <footer className='navMobile'>
            <i className='material-icons md-light'>home</i>
            <i className='material-icons md-light'>search</i>
            <i className='material-icons md-light star'>starrate</i>
            <a href='/profile'>
                <i className='material-icons md-light'>account_circle</i>
            </a>

        </footer>
    </div>
)

export default MobileNavBar
