import axios from 'axios';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://webservices.nextbus.com/';

const instance = axios.create({
  baseURL: BASE_URL
});

// request header
instance.interceptors.request.use(
  config => parseConfig(config),
  error => Promise.reject(error)
);

// configuration parse
const parseConfig = (config) => {
  let configuration = { ...config };  
  configuration.headers = {'Access-Control-Allow-Origin': '*'}
  return configuration;
};

// response parse
instance.interceptors.response.use(
  response => parseBody(response),
  error => {
    if (error.response) {
      return parseError(error.response.data);
    } else {
      return Promise.reject(error);
    }
  }
);

// parse response
const parseBody = (response) => {
  if (response.data) {
    return response.data;
  } else {
    return parseError(response.data);
  }
};

// parse error
const parseError = (messages) => {
  if (messages.status.status_code === 401) {
    window.location.replace('/login');
    localStorage.removeItem('auth_token');
    return messages;
  } else {
    return Promise.reject({ messages: 'Something went Wrong' });
  }
};

export const http = instance;
