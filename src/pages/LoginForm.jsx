import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import emailIcon from '../assets/images/Icons/mail.svg'
import lockIcon from '../assets/images/Icons/lock.svg'
import Input from '../components/Input'
import { useLocation } from 'wouter'
import '../styles/Form.css'
import { login } from '../services/Users'
import articles from '../services/Articles'
import { handleForm } from '../hooks/handleForm'
import { existUserValidate } from '../hooks/existUserValidate'

const LoginForm = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useLocation()

  existUserValidate('/', setLoading)

  const onSendAction = async () => {
    const user = await login(email, password)
    localStorage.setItem('user', JSON.stringify(user))
    articles.setToken()
    setLocation('/')
  }

  const {
    validateInput,
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
    error
  } = handleForm(setLoading, onSendAction)

  const toggleForm = (event) => {
    event.preventDefault()
    console.log(`Redirected from ${location}`)
    setLocation('/register')
  }

  return (
    <>
      {
        loading
          ? <Spinner />
          : (
            <div className="form">
              <h2 className="form__title">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form__fields">
                  <Input
                    name='email'
                    onChangeHandle={({ target }) => setEmail(target.value)}
                    validateHandle={validateInput}
                    image={emailIcon}
                    placeholder='Email'
                    type="email"
                    value={email}
                    />
                  <Input
                    name='password'
                    onChangeHandle={({ target }) => setPassword(target.value)}
                    validateHandle={validateInput}
                    image={lockIcon}
                    placeholder='Password'
                    type="password"
                    value={password}
                    />
                </div>
                <span className="form__error">{error}</span>
                <button className="form__button">Sign In</button>
                <button
                  className="form__description"
                  onClick={toggleForm}
                >
                Sign Up here
                </button>
              </form>
            </div>)
      }
    </>
  )
}

export default LoginForm
