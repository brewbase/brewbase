export function getFavoriteBreweryIds(state) {
    let favoriteBreweryIds
    if (state.favoriteBreweries) {
        favoriteBreweryIds = state.favoriteBreweries.map(b => b.brewery.id)
    } else {
        favoriteBreweryIds = state.map(b => b.brewery.id)
    }
    return favoriteBreweryIds
}

export function getFavoriteBrewIds(state) {
    let favoriteBrewIds
    if (state.favoriteBrews) {
        favoriteBrewIds = state.favoriteBrews.map(b => b.id)
    } else {
        favoriteBrewIds = state.map(b => b.id)
    }
    return favoriteBrewIds
}
