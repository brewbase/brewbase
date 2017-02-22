import React from 'react'
import {Link} from 'react-router'

const MobileNavBar = (props) => {
    let urlExtension
    props.userId === false ? urlExtension = 'auth0id' : urlExtension = props.userId
    return (
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

                {props.userId === false ? (<Link href={`//localhost:4000/user/${urlExtension}`}>
                    <i className='material-icons md-light'>account_circle</i>
                </Link>):
                (<Link to='/'>
                    <i className='material-icons md-light'>account_circle</i>
                </Link>)
                }

            </footer>
        </div>
    )
}

export default MobileNavBar
