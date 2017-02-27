import updateFavoriteBrews from './updateFavoriteBrews.js';
import axios from 'axios'

export default function deletingFavoriteBeer(beer, userid) {
    return function(dispatch) {
        dispatch(updateFavoriteBrews(beer))
        return axios({
            method: 'delete',
            url: `/api/deleteBrew`,
            data: {beerid: beer.id, userid}
        })
        .then(response => console.log(response, 'delete a beer'))
    }
}
