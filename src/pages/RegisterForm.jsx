import React, { useState } from 'react'
import { existUserValidate } from '../hooks/existUserValidate'
import { handleForm } from '../hooks/handleForm'
import emailIcon from '../assets/images/Icons/mail.svg'
import lockIcon from '../assets/images/Icons/lock.svg'
import Input from '../components/Input'
import { useLocation } from 'wouter'
import { register } from '../services/Users'
import '../styles/Form.css'
import Spinner from '../components/Spinner'

const RegisterForm = () => {
  const [location, setLocation] = useLocation()
  const [loading, setLoading] = useState(true)

  existUserValidate('/', setLoading)

  const onSendAction = async () => {
    await register(email, password)
    setLocation('/login')
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
    setLocation('/login')
  }

  return (
    <>
    {
      loading
        ? <Spinner />
        : (
          <div className="form">
            <h2 className="form__title">Register</h2>
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
              <button className="form__button">Sign Up</button>
              <button
                className="form__description"
                onClick={toggleForm}
              >
              Sign In here
              </button>
            </form>
          </div>
          )
    }
    </>

  )
}

export default RegisterForm
