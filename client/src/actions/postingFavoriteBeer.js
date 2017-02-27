import updateFavoriteBrews from './updateFavoriteBrews.js';
import axios from 'axios';

export default function postingFavoriteBeer(beer, userid) {
    return function(dispatch) {
        dispatch(updateFavoriteBrews(beer))
        let beerstring = JSON.stringify(beer)
        return axios({
            method: 'post',
            url: '/api/favoriteBrews',
            data: { beerstring, userid, beerid: beer.id }
        })
        .then(response => console.log(response, 'this is the response from fav beers'))
    }
}
