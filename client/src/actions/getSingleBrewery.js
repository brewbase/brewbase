import startFetchingBreweries from './startFetchingBreweries.js'
import receiveBreweries from './receiveBreweries.js'
import breweriesError from './breweriesError.js'
import config from '../../config.js'

export default function getSingleBrewery (id) {
    return function (dispatch) {
        dispatch(startFetchingBreweries())
        return fetch(`https://api.brewerydb.com/v2/brewery/${id}/beers?key=${config.key}&format=json`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            dispatch(receiveBreweries(json.data))
        })
        .catch(err => dispatch(breweriesError(err)))
    }
}
