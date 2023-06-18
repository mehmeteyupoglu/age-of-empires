import { unitsReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import unitSaga from './saga/units';

const saga = createSagaMiddleWare();
export const store = configureStore({
  reducer: { unitsReducer },
  middleware: [saga]
});

saga.run(unitSaga);
