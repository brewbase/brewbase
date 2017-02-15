export function getBreweries(state) {
    return state.breweries.data.map(b => ({
        name: b.brewery.name,
        id: b.brewery.id
    }))
}
