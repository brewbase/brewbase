import React from 'react'

const Brews = (props) => (
    <div className="brewContainer">
        {props.brews.map((b, i) => (
            <div key={i} className='cardHolderContainer'>
                <div className='cardContainer'>
                    <div className='imgContainer'>
                        <img
                            className='breweryImg'
                            src='http://www.thegoodshoppingguide.com/wp-content/uploads/2013/03/beer.jpg'
                            alt='beer'
                        />
                    </div>
                    <div className='textContainer'>
                        <h1
                            className='breweryName'
                        >
                            {b.name}
                        </h1>
                    </div>
                    <i
                        className='material-icons favStar'
                        onClick={() => props.onStarClick(b)}
                    >
                        {props.favoriteBrewIds.includes(b.id) ? 'star' : 'star_border'}
                    </i>
                </div>
            </div>
        ))}
    </div>
)

export default Brews
