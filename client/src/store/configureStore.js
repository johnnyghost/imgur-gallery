import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/';
import sagas from './sagas/';
import { loadState, saveState } from 'store/utils';

/**
 * Configure store.
 *
 * @return {Object} store
 */
const configureStore = ():Object => {
  const persistedState = loadState();
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const store = createStoreWithMiddleware(reducers, persistedState);

  store.subscribe(() => {
    saveState(store.getState())
  })
  
  sagaMiddleware.run(sagas);
  return store;
}

export default configureStore;
