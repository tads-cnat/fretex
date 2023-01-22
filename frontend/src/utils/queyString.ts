export function objToQueryString(obj: any) {
    const keyValuePairs = [];
    for (const key in obj) {
        keyValuePairs.push(
            encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]),
        );
    }
    return keyValuePairs.join("&");
}