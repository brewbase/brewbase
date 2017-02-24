import updateFavoriteBreweries from './updateFavoriteBreweries.js';
import axios from 'axios';

export default function getFavoriteBreweries(userid) {
    return function(dispatch) {
        return axios({
            method: 'post',
            url: `/api/getFavoriteBreweries`,
            data: {userid}
        })
        .then(response => {
            const breweries = response.data.map(b => JSON.parse(b.brewerystring))
            dispatch(updateFavoriteBreweries(breweries))
        })
    }
}
