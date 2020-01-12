import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import transport from './Transport';

export default (history) => combineReducers({
  router: connectRouter(history),
  transport: transport
});