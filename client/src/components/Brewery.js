import React from 'react'
import {Link} from 'react-router'
import '../styles/main.css'
/* eslint-disable */
const Brewery = (props) => {
    let image
    props.brewery.brewery.images ? image = props.brewery.brewery.images.squareMedium : null
    return (
            <div className='cardContainer'>
                <div className='imgContainer'>
                    <img
                        className='breweryImg'
                        src={image}
                        alt="No image available"
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
                    onClick={() => {props.isFavorited ?  props.onUnfavoriteStarClick(props.brewery, props.userid) :  props.onFavoriteStarClick(props.brewery, props.userid)}}
                >
                    {props.isFavorited ? 'star' : 'star_border'}
                </i>
            </div>
    )
}

export default Brewery
