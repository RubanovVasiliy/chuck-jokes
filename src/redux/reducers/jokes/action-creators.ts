import { IJoke } from '../../../models/IJoke';
import {
  FetchJokeFailureAction,
  FetchJokeRequestAction,
  FetchJokeSuccessAction,
  JokesActionEnum,
} from './types';

export const JokesActionCreators = {
  fetchJokeRequest: (): FetchJokeRequestAction => ({
    type: JokesActionEnum.FETCH_JOKE_REQUEST,
  }),

  fetchJokeSuccess: (payload: IJoke): FetchJokeSuccessAction => ({
    type: JokesActionEnum.FETCH_JOKE_SUCCESS,
    payload: payload,
  }),

  fetchJokeFailure: (payload: string): FetchJokeFailureAction => ({
    type: JokesActionEnum.FETCH_JOKE_FAILURE,
    payload: payload,
  }),
};
