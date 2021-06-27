import React from 'react'
import ReactDOM from 'react-dom'
import { UserContextProvider } from './hooks/UserContext.jsx'

import './styles/index.css'
import App from './App'

ReactDOM.render(
  <UserContextProvider>
    <App />,
  </UserContextProvider>,
  document.getElementById('app')
)
