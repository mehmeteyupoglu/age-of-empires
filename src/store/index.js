import { appReducer, todosReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';

const saga = createSagaMiddleWare();
export const store = configureStore({
  reducer: { appReducer, todosReducer },
  middleware: [saga]
});
