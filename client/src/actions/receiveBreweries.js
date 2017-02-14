export default function receiveBreweries(data) {
    return {
        type: "RECEIVE_BREWERIES",
        breweries: data
    }
}
