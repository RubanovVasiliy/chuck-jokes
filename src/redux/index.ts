import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './reducers/sagas';

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

const persistedState = localStorage.getItem('persistState')
  ? JSON.parse(localStorage.getItem('persistState') ?? '')
  : {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  localStorage.setItem('persistState', JSON.stringify(store.getState()));
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
