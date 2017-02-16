import startFetchingBreweries from './startFetchingBreweries.js'
import receiveBreweries from './receiveBreweries.js'
import breweriesError from './breweriesError.js'
import config from '../../config.js'

const states = ['alabama','alaska','american samoa','arizona','arkansas',
'california','colorado','connecticut','delaware','district of columbia',
'micronesia','florida','georgia','guam','hawaii',
'idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine',
'marshall islands','maryland','massachusetts','michigan','minnesota',
'mississippi','missouri','montana','nebraska','nevada','new hampshire',
'new jersey','new mexico','new York','north carolina','north Dakota',
'northern mariana islands','ohio','oklahoma','oregon','palau','pennsylvania',
'puerto rico','rhode island','south carolina','south dakota','tennessee',
'texas','utah','vermont','virgin island','virginia','washington',
'west virginia','wisconsin','wyoming'];

const toLowerCase = (text) => text.toLowerCase()

export default function getBreweries(input) {
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
}
