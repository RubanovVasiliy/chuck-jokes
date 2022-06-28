import { IJoke } from '../../../models/IJoke';

export interface JokesState {
  jokes: IJoke[];
}

export enum JokesActionEnum {
  GET_JOKE = 'GET_JOKE',
}

export interface GetJokeAction {
  type: JokesActionEnum.GET_JOKE;
  payload: IJoke;
}

export type JokesActions = GetJokeAction;
