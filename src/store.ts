import type { Action } from '@reduxjs/toolkit';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { ThunkAction } from 'redux-thunk';

import counterReducer from './slices/counterSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
