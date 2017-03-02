import startFetchingBrews from './startFetchingBrews.js'
import receiveBrews from './receiveBrews.js'
import brewsError from './brewsError.js'

export default function getBrews(id) {
    return function(dispatch) {
        dispatch(startFetchingBrews())
        return axios({ 
                method: 'post',
                url: `/brewdb/beers`, 
                data: {id} 
        })
        .then(response => {
            dispatch(receiveBrews(response.data))
        })
        .catch(err => dispatch(brewsError(err)))
    }
}
