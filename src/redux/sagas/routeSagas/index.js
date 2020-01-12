import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../../actionTypes';

import { fetchRoutes, fetchDirections } from '../../api/routesApi';

function* routeLocation() {
  try {
    const res = yield call(fetchRoutes, { agency: 'sf-muni' });
    yield put({ type: actionTypes.SAVE_ROUTES, data: res.route ? res.route : [] })
  } catch(err) {
    yield put({ type: actionTypes.SAVE_ROUTES, data: [] })
  }
}

function* directionList(action) {
  yield put({ type: actionTypes.WAIT_LOADER, load: true });
  try {
    const res = yield call(fetchDirections, action.data);
    yield put({ type: actionTypes.SAVE_DIRECTIONS, data: res.route ? res.route : {}});
  } catch(err) {
    console.log("asa", err)
    yield put({ type: actionTypes.SAVE_DIRECTIONS, data: {}})
  }
}


/**Transport Sagas */
function* Transport() {
  yield takeLatest(actionTypes.FETCH_ROUTES, routeLocation);
  yield takeLatest(actionTypes.FETCH_DIRECTIONS, directionList);
}

/**Root Auth */
export default function* rootSaga() {
  yield all([fork(Transport)]);
}
