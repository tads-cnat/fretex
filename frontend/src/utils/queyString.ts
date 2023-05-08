export const objToQueryString = (obj: any): string => {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]),
    );
  }
  return keyValuePairs.join("&");
}

export const objToQueryStringMelhorada = (obj: any): string => { 
  const queryString = Object.keys(obj)
    .map((key) => obj[key].map((value) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&'))
    .join('&');
  return queryString;
}