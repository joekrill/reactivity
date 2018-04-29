import { request } from '../../helpers/Api';

function submit(values) {
  return request('/api/rsvp', {
    body: JSON.stringify(values),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    mode: 'cors',
  });
}

export default submit;
