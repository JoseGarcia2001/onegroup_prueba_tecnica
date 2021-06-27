import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { UserContextProvider } from '../hooks/UserContext'

const ToggleForms = () => {
  const [isLogging, setIsLogging] = useState(false)

  const handleToggle = (event) => {
    event.preventDefault()
    setIsLogging(!isLogging)
  }

  const formMessage = isLogging ? 'Sign Up here' : 'Sign In here'
  return (
      <UserContextProvider>
        {isLogging
          ? <LoginForm>
              <button
                className="form__description"
                onClick={handleToggle}
              >
                {formMessage}
              </button>
            </LoginForm>
          : <RegisterForm>
              <button
                className="form__description"
                onClick={handleToggle}
              >
                {formMessage}
              </button>
            </RegisterForm>
        }
    </UserContextProvider>
  )
}

export default ToggleForms
