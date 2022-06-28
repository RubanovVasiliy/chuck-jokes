import { IJoke } from '../../../models/IJoke';
import { GetJokeAction, JokesActionEnum } from './types';

export const PostsActionCreators = {
  getJoke: (payload: IJoke): GetJokeAction => ({
    type: JokesActionEnum.GET_JOKE,
    payload: payload,
  }),
};
