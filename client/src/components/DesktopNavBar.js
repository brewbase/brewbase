import React from 'react'
import {Link} from 'react-router'

const DesktopNavBar = (props) => {
    let urlExtension
    props.userId === false ? urlExtension = 'auth0id' : urlExtension = props.userId
    return (
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
                {
                    props.userId === false ?
                        (<Link href={`//localhost:4000/user/${urlExtension}`}>
                            <i className='material-icons md-light'>account_circle</i>
                        </Link>)
                        :
                        (<Link to={`/profile?id=${urlExtension}`}>
                            <i className='material-icons md-light'>account_circle</i>
                        </Link>)
                }
            </div>
        </div>
    )
}

export default DesktopNavBar
