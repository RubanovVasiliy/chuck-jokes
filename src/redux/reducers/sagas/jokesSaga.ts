import { AxiosRequestConfig, AxiosResponseHeaders } from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import JokesService from '../../../api/JokesService';
import { IJoke } from '../../../models/IJoke';
import { JokesActionCreators } from '../jokes/action-creators';
import { JokesActionEnum } from '../jokes/types';

interface ResponseGenerator {
  config?: AxiosRequestConfig;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  headers?: AxiosResponseHeaders;
  request?: unknown;
  status?: number;
  statusText?: string;
}

function* fetchJokeSaga() {
  try {
    const response: ResponseGenerator = yield call(JokesService.fetchJoke);
    const data: IJoke = response.data;
    yield put(JokesActionCreators.fetchJokeSuccess(data));
  } catch (e) {
    yield put(JokesActionCreators.fetchJokeFailure((e as Error).message));
  }
}

function* jokesSaga() {
  yield all([takeEvery(JokesActionEnum.FETCH_JOKE_REQUEST, fetchJokeSaga)]);
}

export default jokesSaga;
