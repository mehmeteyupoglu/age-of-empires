import { appReducer, todosReducer, unitsReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import unitSaga from './saga/units';

const saga = createSagaMiddleWare();
export const store = configureStore({
  reducer: { appReducer, todosReducer, unitsReducer },
  middleware: [saga]
});

saga.run(unitSaga);
