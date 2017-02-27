import updateFavoriteBreweries from './updateFavoriteBreweries.js';
import axios from 'axios'

export default function deletingFavoriteBrewery(brewery, userid) {
    return function(dispatch) {
        dispatch(updateFavoriteBreweries(brewery))
        return axios({
            method: 'delete',
            url: `/api/deleteBreweries`,
            data: {breweryid: brewery.brewery.id, userid}
        })
        .then(response => console.log(response, 'delete a brewery'))
    }
}
