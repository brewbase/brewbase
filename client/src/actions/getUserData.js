import updateUserData from './updateUserData.js';

export default function getUserData(userId) {
    return function(dispatch) {
        return fetch(`/users/${userId}`)
        .then(response => response.json())
        .then(json => {
            console.log(json, 'this is the json from user data');
            dispatch(updateUserData(json))
        })
    }
}
