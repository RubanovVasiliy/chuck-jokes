import { all, fork } from 'redux-saga/effects';
import jokesSaga from './jokesSaga';

export function* rootSaga() {
  yield all([fork(jokesSaga)]);
}
