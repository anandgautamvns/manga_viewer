import { all, call } from 'redux-saga/effects';
import moduleSaga from './pages/states/saga';

export default function* rootSaga() {
  yield all([call(moduleSaga)]);
}
