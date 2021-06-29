import React from 'react'
import { Route } from 'wouter'
import './styles/App.css'

import Header from './components/Header'
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'
import Main from './pages/Main'

function App () {
  return (
    <>
        <Header/>
        <Route path="/login"><LoginForm /></Route>
        <Route path="/register"><RegisterForm /></Route>
        <Route path="/"><Main /></Route>
    </>
  )
}

export default App
