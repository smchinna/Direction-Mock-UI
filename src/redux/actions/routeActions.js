import * as actionTypes from '../actionTypes';

export const fetchRouteAPI = () => {
  return { type: actionTypes.FETCH_ROUTES }   
}

export const fetchDirectionsAPI = (data) => {
  return { type: actionTypes.FETCH_DIRECTIONS, data }
}