import React from 'react'

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
                    <i
                        className='material-icons favStar'
                        onClick={() => props.onStarClick(b)}
                    >
                        {props.favoriteBrewIds.includes(b.id) ? 'star' : 'star_border'}
                    </i>
                </div>
            )
        })}

</div>
)

export default Brews
