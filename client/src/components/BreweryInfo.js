import React from 'react'
import Brews from './Brews.js'

const BreweryInfo = (props) => (
    <div>
        {props.brewery.brewery.name}
        <Brews
            brews={props.brews}
            favoriteBrewIds={props.favoriteBrewIds}
            onStarClick={props.onStarClick}
        />
    </div>
)

export default BreweryInfo
