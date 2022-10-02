import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

const promiseMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action) => {
  if (typeof action.then !== 'function') {
    return next(action);
  }
  return Promise.resolve(action).then((value) => {
    return new Promise((resolve, reject) => {
      return store.dispatch({ ...value, meta: { resolve, reject } });
    });
  });
};

export default promiseMiddleware;
