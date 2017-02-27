export default function updateFavoriteBrews(data) {
    if (Array.isArray(data)) {
        return {
            type: 'UPDATE_FAVORITE_BREWS',
            brews: data
        }
    } else {
        return {
            type: 'UPDATE_FAVORITE_BREWS',
            brew: data
        }
    }
}
