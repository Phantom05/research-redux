import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import configureStore from './configureStore'
let { store, persistor } = configureStore()
// import { createStore } from 'redux'
// import reducer from './reducers/index'

// let store = createStore(reducer)



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
