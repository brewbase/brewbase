import updateFavoriteBrews from './updateFavoriteBrews.js';
import axios from 'axios';

export default function getFavoriteBrews(userid) {
    return function(dispatch) {
        return axios({
            method: 'post',
            url: `/api/getFavoriteBrews`,
            data: { userid }
        })
        .then(response => {
            const brews = response.data.map(b => JSON.parse(b.beerstring))
            dispatch(updateFavoriteBrews(brews))
        })
    }
}
