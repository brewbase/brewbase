export function getFavoriteBreweryIds(state) {
    let favoriteBreweryIds
    if (state.favoriteBreweries) {
        favoriteBreweryIds = state.favoriteBreweries.map(b => b.brewery.id)
    } else {
        favoriteBreweryIds = state.map(b => b.brewery.id)
    }
    return favoriteBreweryIds
}
