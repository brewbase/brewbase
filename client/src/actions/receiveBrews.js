export default function receiveBrews(data) {
    return {
        type: "RECEIVE_BREWS",
        brews: data
    }
}
