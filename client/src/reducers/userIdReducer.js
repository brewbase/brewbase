export default function userIdReducer(state = false, action) {
    switch(action.type) {
        case 'LOGIN_USER': {
            return action.userId
        }
        default: {
            return state
        }
    }
}
