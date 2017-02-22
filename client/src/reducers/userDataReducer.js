export default function userDataReducer(state = {}, action) {
    switch(action.type){
        case "UPDATE_USER_DATA": {
         return {
          name: action.name,
          imgUrl: action.imgurl
         }
        }
        default: {
            return state
        }
    }
}
