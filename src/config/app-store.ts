import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import initSaga from './root-saga';

import { userMessageSlice } from 'features/user-message';

const rootReducer = {
  userMessage: userMessageSlice
};

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: {
      ...rootReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }).concat([sagaMiddleware])
  });

  // @ts-ignore
  store.injectSaga = createSagaInjector(sagaMiddleware.run, initSaga);
  // @ts-ignore
  store.asyncReducers = {};
  // @ts-ignore
  store.injectReducer = (key: string, asyncReducer: any) => {
    // @ts-ignore
    store.asyncReducers[key] = asyncReducer;
    // @ts-ignore
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
};

const createSagaInjector = (runSaga: any, rootSaga: any) => {
  const injectedSagas = new Map();
  const isInjected = (key: string) => injectedSagas.has(key);
  const injectSaga = (key: string, saga: any) => {
    if (isInjected(key)) return;
    const task = runSaga(saga);
    injectedSagas.set(key, task);
  };
  injectSaga('root', rootSaga);
  return injectSaga;
};

const createReducer = (asyncReducers: any) => {
  return combineReducers({
    ...rootReducer,
    ...asyncReducers
  });
};

export const store = createStore();
