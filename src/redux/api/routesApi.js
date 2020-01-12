import * as apiConstants from '../constants/routeConstants';
import apiCall from './index';

const proxyurl = "https://cors-anywhere.herokuapp.com/"; //CROSS ORIGIN
const baseURL = 'http://webservices.nextbus.com';

const url = `${proxyurl}${baseURL}`;

export const fetchRoutes = () => {
  let params = "command=routeList&a=sf-muni"; 
  let apiURL = `${url}${apiConstants.fetchRoutesAPI}?${params}`
  return apiCall("GET", apiURL);
}

export const fetchDirections = (parameter) => {
  let params = "command=routeConfig&a=sf-muni"; 
  if(parameter.route) {
    params += `&r=${parameter.route}`;
  }
  if(parameter.stop) {
    params += `&s=${parameter.stop}`
  }
  let apiURL = `${url}${apiConstants.fetchRoutesAPI}?${params}`
  return apiCall("GET", apiURL);
}
