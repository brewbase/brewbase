import startFetchingBreweries from './startFetchingBreweries.js'
import receiveBreweries from './receiveBreweries.js'
import breweriesError from './breweriesError.js'
import states from '../data/states.js'
import config from '../../config.js'

const toLowerCase = (text) => text.toLowerCase()

export default function getBreweries(input) {
    if (typeof input === 'string') {
        input = toLowerCase(input)
        return function(dispatch) {
            dispatch(startFetchingBreweries())
            if (states.find(s => s === input)) {
                return fetch(`https://api.brewerydb.com/v2/locations?region=${input}&key=${config.key}&format=json`)
                    .then(response => response.json())
                    .then(json => {
                        dispatch(receiveBreweries(json.data))
                    })
                    .catch(err => dispatch(breweriesError(err)))
            } else {
                return fetch(`https://api.brewerydb.com/v2/locations?locality=${input}&key=${config.key}&format=json`)
                    .then(response => response.json())
                    .then(json => {
                        dispatch(receiveBreweries(json.data))
                    })
                    .catch(err => dispatch(breweriesError(err)))
            }
        }
    } else {
        return function (dispatch) {
            dispatch(startFetchingBreweries())
            return fetch(`https://api.brewerydb.com/v2/search/geo/point?lat=${input.lat}&lng=${input.lng}&radius=100&key=${config.key}&format=json`)
                .then(response => response.json())
                .then(json => {
                    dispatch(receiveBreweries(json.data))
                })
                .catch(err => dispatch(breweriesError(err)))
        }
    }
}
