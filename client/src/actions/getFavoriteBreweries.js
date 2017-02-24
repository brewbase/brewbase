import updateFavoriteBreweries from './updateFavoriteBreweries.js';
import axios from 'axios';

export default function getFavoriteBreweries(userId) {
    return function(dispatch) {
        return axios({
            method: 'get',
            url: `/api/getFavoriteBreweries/${userId}`
        })
        .then(response => dispatch(updateFavoriteBreweries(response.data)))
    }
}
