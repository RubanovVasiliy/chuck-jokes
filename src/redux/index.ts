import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reducers from './reducers';

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
