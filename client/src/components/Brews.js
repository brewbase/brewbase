import React from 'react'
/* eslint-disable */
const Brews = (props) => (
    <div className='cardHolderContainer'>
        {props.brews.map((b, i) => {
            let img
            b.labels ? img = b.labels.medium : null
            return(
                <div className='cardContainer' key={i}>
                    <div className='imgContainer'>
                        <img
                            className='breweryImg'
                            src={img}
                            alt="No image available"
                        />
                    </div>
                    <div className='textContainer'>
                        <h1
                            className='breweryName'
                        >
                            {b.name}
                        </h1>
                    </div>
                    {props.favoriteBrewIds.includes(b.id) ?
                    (<i
                        className='material-icons favStar'
                        onClick={() => props.onUnfavoriteStarClick(b, props.userId)}
                    >
                        star
                    </i>)
                    :
                    (<i
                        className='material-icons favStar'
                        onClick={() => props.onFavoriteStarClick(b, props.userId)}
                    >
                        star_border
                    </i>)
                    }
                </div>
            )
        })}

</div>
)

export default Brews
