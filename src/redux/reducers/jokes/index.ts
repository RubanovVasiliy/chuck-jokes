import { JokesActions, JokesState } from './types';

const initialState: JokesState = {
  jokes: [],
};

export default function RateReducer(
  state = initialState,
  action: JokesActions
): JokesState {
  switch (action.type) {
    default:
      return state;
  }
}
