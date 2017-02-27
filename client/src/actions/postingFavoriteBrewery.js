import axios from 'axios';
import updateFavoriteBreweries from './updateFavoriteBreweries.js';

export default function postingFavoriteBrewery(brewery, userid) {
    return function(dispatch) {
        dispatch(updateFavoriteBreweries(brewery))
        let brewerystring = JSON.stringify(brewery)
        return axios({
            method: 'post',
            url: '/api/favoriteBreweries',
            data: {brewerystring, userid, breweryid: brewery.brewery.id}
        })
        .then(response => console.log(response, 'this is the response from fav breweries'))
    }
}
