export default function breweriesError(err) {
    return {
        type: "BREWERIES_ERROR",
        error: err
    }
}
