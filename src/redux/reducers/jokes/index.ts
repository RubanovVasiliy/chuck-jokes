import { JokesActionEnum, JokesActions, JokesState } from './types';

const initialState: JokesState = {
  jokes: [],
  loading: false,
  error: null,
};

export default function RateReducer(
  state = initialState,
  action: JokesActions
): JokesState {
  switch (action.type) {
    case JokesActionEnum.FETCH_JOKE_SUCCESS:
      if (
        state.jokes.find((element) => {
          if (element.id === action.payload.id) return true;
          return false;
        })
      ) {
        alert('Load the same joke');
        return { ...state, loading: false, error: 'Load the same joke' };
      }
      return {
        ...state,
        jokes: [...state.jokes, action.payload],
        loading: false,
      };

    case JokesActionEnum.FETCH_JOKE_REQUEST:
      return { ...state, loading: true };

    case JokesActionEnum.FETCH_JOKE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
