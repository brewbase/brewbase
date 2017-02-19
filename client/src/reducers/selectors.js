export function getFavoriteBreweryIds(state) {
    const favoriteBreweryIds = state.favoriteBreweries.map(b => b.brewery.id)
    return favoriteBreweryIds
}
