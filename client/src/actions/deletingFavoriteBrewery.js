import updateFavoriteBreweries from './updateFavoriteBreweries.js';
import axios from 'axios'

export default function deletingFavoriteBrewery(brewery) {
    return function(dispatch) {
        dispatch(updateFavoriteBreweries(brewery))
        return axios({
            method: 'delete',
            url: `/api/deleteBreweries/${brewery.brewery.id}`,
            data: brewery
        })
            .then(response => console.log(response, 'this is the response for deleting a brewery'))
    }
}
