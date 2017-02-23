import axios from 'axios';
import updateFavoriteBreweries from './updateFavoriteBreweries.js';

export default function postingFavoriteBrewery(brewery) {
    return function(dispatch) {
        dispatch(updateFavoriteBreweries(brewery))
        return axios({
            method: 'post',
            url: '/api/favoriteBreweries',
            data: brewery
        })
            .then(response => console.log(response, 'this is the response from fav breweries'))
    }
}
