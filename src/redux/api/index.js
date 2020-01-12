import { http } from '../http';

const apiCall = (method, url, options) => {
  var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
  switch (method) {
    case 'GET':
      return http
        .get(url, options, config)
        .then(response => response)
        .catch(error => ({ error }));
    case 'POST':
      return http
        .post(url, options)
        .then(response => response)
        .catch(error => ({ error }));
    case 'PUT':
      return http
        .put(url, options)
        .then(response => response)
        .catch(error => ({ error }));
    case 'DELETE':
      return http
        .delete(url, options)
        .then(response => response)
        .catch(error => ({ error }));
    default:
      return { error: 'Undefined API Method' };
  }
};

export default apiCall;
