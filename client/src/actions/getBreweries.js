import startFetchingBreweries from './startFetchingBreweries.js'
import receiveBreweries from './receiveBreweries.js'
import breweriesError from './breweriesError.js'
import states from '../data/states.js'
import axios from 'axios'

const toLowerCase = (text) => text.toLowerCase()

export default function getBreweries(input) {
    if (typeof input === 'string') {
        input = toLowerCase(input)
        return function(dispatch) {
            dispatch(startFetchingBreweries())
            if (states.find(s => s === input)) {
                return axios({
                    method: 'post',
                    url: `/brewdb/state`,
                    data: {input}
                })
                // .then(response => response.json())
                .then(response => {
                    console.log(response.data)
                    dispatch(receiveBreweries(response.data))
                })
                .catch(err => dispatch(breweriesError(err)))
            } else {
                return axios({
                    method: 'post',
                    url: `/brewdb/city`,
                    data: {input}
                })
                .then(response => {
                    dispatch(receiveBreweries(response.data))
                })
                .catch(err => dispatch(breweriesError(err)))
            }
        }
    } else {
        return function (dispatch) {
            dispatch(startFetchingBreweries())
            return axios({
                method: 'post',
                url: `/brewdb/geopoint`,
                data: {input}
            })
            .then(response => {
                dispatch(receiveBreweries(response.data))
            })
            .catch(err => dispatch(breweriesError(err)))
        }
    }
}
