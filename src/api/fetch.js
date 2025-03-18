import axios from 'axios';

export async function fetch(url, options) {
  const request = {
    method: options.method ? options.method : 'GET',
    url,
    headers: { ...options.headers },
    data: options.data,
  };
  console.log("request", request)

  return axios(request)
    .then((response) => response)
    .catch((err) => Promise.reject(err));
}
