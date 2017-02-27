import updateFavoriteBrews from './updateFavoriteBrews.js';
import axios from 'axios';

export default function postingFavoriteBeer(beer) {
    return function(dispatch) {
        dispatch(updateFavoriteBrews(beer))
        return axios({
            method: 'post',
            url: '/api/favoriteBrews',
            data: beer
        })
            .then(response => console.log(response, 'this is the response from fav beers'))
    }
}
