import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JokesActionCreators } from '../redux/reducers/jokes/action-creators';

const allActionsCreators = {
  ...JokesActionCreators,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionsCreators, dispatch);
};
