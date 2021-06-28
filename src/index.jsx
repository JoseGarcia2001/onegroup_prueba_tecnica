import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { articlesReducer } from './reducers/articlesReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import './styles/index.css'
import App from './App'

const store = createStore(articlesReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app')
)
