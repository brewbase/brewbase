import startFetchingBreweries from './startFetchingBreweries.js'
import receiveBreweries from './receiveBreweries.js'
import breweriesError from './breweriesError.js'
import config from '../../config.js'

// const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas',
// 'California','Colorado','Connecticut','Delaware','District of Columbia',
// 'Federated States of Micronesia','Florida','Georgia','Guam','Hawaii',
// 'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
// 'Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota',
// 'Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
// 'New Jersey','New Mexico','New York','North Carolina','North Dakota',
// 'Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania',
// 'Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee',
// 'Texas','Utah','Vermont','Virgin Island','Virginia','Washington',
// 'West Virginia','Wisconsin','Wyoming'];

export default function getBreweries() {
    return function(dispatch) {
        dispatch(startFetchingBreweries())
        return fetch('https://api.brewerydb.com/v2/locations?region=utah&key=' + config.key + '&format=json')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch(receiveBreweries(json.data))
            })
            .catch(err => dispatch(breweriesError(err)))
    }
}
