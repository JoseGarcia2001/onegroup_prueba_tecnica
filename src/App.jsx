import React from 'react'
import { Route } from 'wouter'
import './styles/App.css'

import Header from './components/Header'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Main from './components/Main'

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
