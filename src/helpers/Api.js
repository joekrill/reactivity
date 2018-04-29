import { SubmissionError } from 'redux-form';

function parseJSON(response) {
  try {
    return response
      .json()
      .then(json => {
        response.jsonBody = json;
        return response;
      })
      .catch(() => response);
  } catch (error) {
    return response;
  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new SubmissionError({
    _error: (response.jsonBody && response.jsonBody.error && response.jsonBody.error.message) || (response.statusText) || 'Something went wrong',
  });
  error.response = response;
  throw error;
}

export function request(url, options) {
  return fetch(url, options)
    .then(parseJSON)
    .then(checkStatus);
}

export function apiFetch(path, options) {
  const host = `${process.env.APP_HOST}:${process.env.APP_PORT}`;
  const contextHost = (process.env.SERVER && host) || '';
  const apiUrl = `${contextHost}/api/${path}`;

  return request(apiUrl, options);
}
