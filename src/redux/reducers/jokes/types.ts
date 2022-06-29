import { IJoke } from '../../../models/IJoke';

export interface JokesState {
  jokes: IJoke[];
  loading: boolean;
  error: string | null;
}

export enum JokesActionEnum {
  FETCH_JOKE_REQUEST = 'FETCH_JOKE_REQUEST',
  FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS',
  FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE',
}

export interface FetchJokeRequestAction {
  type: JokesActionEnum.FETCH_JOKE_REQUEST;
}

export interface FetchJokeSuccessAction {
  type: JokesActionEnum.FETCH_JOKE_SUCCESS;
  payload: IJoke;
}

export interface FetchJokeFailureAction {
  type: JokesActionEnum.FETCH_JOKE_FAILURE;
  payload: string;
}

export type JokesActions =
  | FetchJokeRequestAction
  | FetchJokeSuccessAction
  | FetchJokeFailureAction;
