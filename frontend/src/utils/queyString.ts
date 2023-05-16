export const objToQueryString = (obj: any): string => {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]),
    );
  }
  return keyValuePairs.join('&');
};

// export const objToQueryStringMelhorada = (obj: any): string => {
//   const queryString = Object.keys(obj)
//     .map((key) =>
//       obj[key]
//         .map(
//           (value) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
//         )
//         .join('&'),
//     )
//     .join('&');
//   if (queryString.startsWith('&')) return queryString.slice(1);
//   if (queryString.endsWith('&')) return queryString.slice(0, -1);
//   return queryString;
// };

export const objToQueryStringMelhorada = (obj: any): string => {
  const queryString = Object.keys(obj)
    .map((key) => {
      if (Array.isArray(obj[key]) && obj[key].length !== 0) {
        const chaveRepetida = obj[key]
          .map((value) => `${encodeURIComponent(value)}`)
          .join(',');
        return `${key}=${chaveRepetida}`;
      }
    })
    .join('&');

  if (queryString.startsWith('&')) return queryString.slice(1);
  if (queryString.endsWith('&')) return queryString.slice(0, -1);
  return queryString;
};
