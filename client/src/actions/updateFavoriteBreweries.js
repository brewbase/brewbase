export default function updateFavoriteBreweries(data) {
    if (Array.isArray(data)) {
        return {
            type: 'UPDATE_FAVORITE_BREWERIES',
            breweries: data
        }
    } else {
        return {
            type: 'UPDATE_FAVORITE_BREWERIES',
            brewery: data
        }
    }
}
