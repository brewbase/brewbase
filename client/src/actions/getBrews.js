import startFetchingBrews from './startFetchingBrews.js'
import receiveBrews from './receiveBrews.js'
import brewsError from './brewsError.js'
import config from '../../config.js'

export default function getBrews(id) {
    return function(dispatch) {
        dispatch(startFetchingBrews)
        return fetch(`https://api.brewerydb.com/v2/brewery/${id}/beers?key=${config.key}&format=json`)
        .then(response => response.json())
        .then(json => {
            dispatch(receiveBrews(json.data))
        })
        .catch(err => dispatch(brewsError(err)))
    }
}
