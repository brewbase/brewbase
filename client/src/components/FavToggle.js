import React from 'react'

const FavToggle = (props) => {
    if (props.favorites === 'breweries') {
        return (
            <div>
                <button className='active'>Breweries</button>
                <button onClick={() => props.handleToggleClick()}>Brews</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => props.handleToggleClick()}>Breweries</button>
                <button className='active'>Brews</button>
            </div>
        )
    }
}

export default FavToggle
