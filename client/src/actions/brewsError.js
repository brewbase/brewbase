export default function brewsError(err) {
    return {
        type: "BREWS_ERROR",
        error: err
    }
}
