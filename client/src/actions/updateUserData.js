export default function updateUserData(userData) {
 return {
  type: 'UPDATE_USER_DATA',
  name: userData.name,
  imgUrl: userData.imgurl
  }
}
