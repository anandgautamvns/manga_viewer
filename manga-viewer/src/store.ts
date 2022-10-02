import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import promiseMiddleware from './redux-promise';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(sagaMiddleware, promiseMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
