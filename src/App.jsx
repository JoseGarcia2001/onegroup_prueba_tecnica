import React, { useState, useEffect, useContext } from 'react'
import { context } from './hooks/UserContext.jsx'
import './styles/App.css'

import Header from './components/Header'
import ToggleForms from './components/ToggleForms'
import Cards from './components/Cards'

function App () {
  const [isLogged, setIsLogged] = useState(false)
  const userContext = useContext(context)
  console.log(userContext, 'Desde app')
  if (userContext.user.data) {
    console.log(userContext.user.data, 'Hay Usuario')
  }

  useEffect(() => {
    console.log(userContext, 'Efecto app')
  }, [userContext])
  return (
    <>
        <Header isLogged={isLogged} />
        {isLogged
          ? <Cards/>
          : <ToggleForms />
        }
        <button onClick={() => setIsLogged(!isLogged)}>log</button>
    </>
  )
}

export default App
