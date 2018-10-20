import fetch from 'isomorphic-fetch';

export default function callApi(endpoint, token, options, payload) {
  const staticEndpoint = 'http://localhost:8000/v1/';
  const authHeaders = token ? {
    'Authorization': `Bearer ${token}`
  } : {};

  return fetch(`${staticEndpoint}/${endpoint}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...authHeaders
    },
    body: JSON.stringify(payload),
    ...options
  })
    .then(response => response.json())
    .then(json => {
      if (json.success){
        return json
      }

      throw new Error(json.message);
    });
}
