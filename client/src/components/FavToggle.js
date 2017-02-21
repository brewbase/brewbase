import React from 'react'

const FavToggle = (props) => {
    if (props.favorites === 'breweries') {
        return (
            <div className='toggleContainer'>
                <div className='favBreweriesBtnContainer'>
                    <button className='active'>Breweries</button>
                    <button className='disable' onClick={() => props.handleToggleClick()}>Brews</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='toggleContainer'>
                <div className='favBrewsBtnContainer'>
                    <button className='disable' onClick={() => props.handleToggleClick()}>Breweries</button>
                    <button className='active'>Brews</button>
                </div>
            </div>
        )
    }
}

export default FavToggle
