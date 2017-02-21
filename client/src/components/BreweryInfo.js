import React from 'react'
import Brews from './Brews.js'
import '../styles/main.css'

const BreweryInfo = (props) => {
    let lat = props.brewery.latitude,
        long = props.brewery.longitude,
        street = props.brewery.streetAddress,
        city = props.brewery.locality,
        state = props.brewery.region,
        zip = props.brewery.postalCode,
        image;
    props.brewery.brewery.images ? image = props.brewery.brewery.images.squareMedium : null
    console.log(props)
 return (
    <div className="infoPage">
            <div className="breweryInfoContainer">
                <div className="infoBox">
                        <div className='infoText'>
                            <div className="infoRow">
                                <div className="breweryImgContainer">
                                    <img
                                        className='moreInfo'
                                        src={image}
                                        alt={props.brewery.brewery.name}
                                    />
                                </div>
                                <div className="infoCol">
                                <h1 className='breweryName'>
                                    {props.brewery.brewery.name}
                                </h1>
                                <div className='infoAddress'>
                                    <a className="infoLink" href={"http://maps.google.com/?q=" + street + ", " + city + ", " + state}>
                                    {street}<br />
                                        {city}, {state} {zip}</a>
                                </div>
                            </div>
                        </div>
                            <div className="infoRow">
                        <p className="infoDescription">{props.brewery.brewery.description}</p>
                            </div>
                    </div>
                    </div>
                <div className="mapContainer">
                <img src={"https://maps.googleapis.com/maps/api/staticmap?autoscale=2&size=500x300&maptype=roadmap&key=AIzaSyDx5EOHOD25TDbhXYY7YA50aFcTmhXubpo&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:A%7C" + lat + ",+" + long} alt="brewery map"/>
            </div>
            </div>
        <h1> Brews </h1>
        <Brews
            brews={props.brews}
            favoriteBrewIds={props.favoriteBrewIds}
            onStarClick={props.onStarClick}
        />
    </div>
)}
export default BreweryInfo
