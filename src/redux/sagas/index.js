import { all, fork } from 'redux-saga/effects';

import routeSagas from './routeSagas';

export default function* rootSaga(getState) {
  yield all([
    fork(routeSagas)
  ]);
}

