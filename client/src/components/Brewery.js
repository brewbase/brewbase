import React from 'react'
import {Link} from 'react-router'
import '../styles/main.css'

const Brewery = (props) => (
        <div className='cardHolderContainer'>
            <div className='cardContainer'>
                <div className='imgContainer'>
                    <img
                        className='breweryImg'
                        src='http://www.thegoodshoppingguide.com/wp-content/uploads/2013/03/beer.jpg'
                        alt={props.brewery.brewery.name}
                    />
                </div>
                <div className='textContainer'>
                    <Link
                        to='/searchresults/moreinfo'
                        onClick={() => props.onBreweryClick(props.brewery)}
                    >
                        <h1
                            className='breweryName'
                        >
                            {props.brewery.brewery.name}
                        </h1>
                    </Link>
                    <h2
                        className='breweryAddress'
                    >
                        {props.brewery.streetAddress}
                    </h2>
                    <h3
                        className='distanceAway'
                    >
                        {props.brewery.distance}
                    </h3>
                </div>
                <i
                    className='material-icons favStar'
                    onClick={() => props.onStarClick(props.brewery)}
                >
                    {props.isFavorited ? 'star' : 'star_border'}
                </i>
            </div>
        </div>


)

export default Brewery
