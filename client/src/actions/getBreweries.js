import receiveBreweries from './receiveBreweries';
import breweriesError from './breweriesError';
import startFetchingBreweries from './startFetchingBreweries';

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

// function fetchBreweries(input){
//     for(var i = 0; i < states.length; i++){
//         if (true) {
//             return fetch(`http://api.brewerydb.com/v2/locations?region=utah`);
//         }
//     }
//     return fetch(`http://api.brewerydb.com/v2/locations?locality=denver`);
// }

function fetchBreweries() {
    return fetch('https://api.brewerydb.com/v2/locations?region=utah&key=1168087dc16a437c599b8e48ca2d7c91&format=json')
}

export default function getBreweries(input){
    dispatch(startFetchingBreweries());
    return function(dispatch){
        return fetchBreweries(input)
        .then(response) =>{
            return dispatch(receiveBreweries(response.data))
        }
        .catch(err) => {
            return dispatch(breweriesError(err))
        }
    };
}
