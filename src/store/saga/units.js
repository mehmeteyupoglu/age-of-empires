// cocktailSaga.js

import { call, put, takeEvery } from 'redux-saga/effects';
import { UnitService } from '../../service';
import { unitActions } from '../actions';
function* fetchData() {
  try {
    const data = yield call(UnitService.getUnits);
    yield put(unitActions.getUnitsRequestSuccess(data.data));
  } catch (err) {
    console.log('err', err);
  }
}
export default function* unitSaga() {
  console.log('first');
  yield takeEvery('GET_UNITS_REQUEST', fetchData);
}
