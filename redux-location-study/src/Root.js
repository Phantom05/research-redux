import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App';
// import  { store, persistor }  from 'store';


import {createStore,applyMiddleware,compose} from 'redux';
import modules from 'store/modules';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';
import {createLogger} from 'redux-logger';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { autoRehydrate } from 'redux-phoenix';


const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const middleware =[ logger,sagaMiddleware];

let store = createStore(
  // enhanceReducer(modules),
  modules,
  compose(
    // enhanceStore,
    applyMiddleware(...middleware),
    // offMiddleware,
    autoRehydrate,
    offline(offlineConfig),
    // localIds({reducer: modules}),
  )
);

export { store };

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Router>
            <App />
          </Router>
        {/* </PersistGate> */}
      </Provider>
    );
  }
}


export default Root;