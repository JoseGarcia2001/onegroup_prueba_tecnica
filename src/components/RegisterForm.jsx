import React, { useState, useEffect } from 'react'
import emailIcon from '../assets/images/Icons/mail.svg'
import lockIcon from '../assets/images/Icons/lock.svg'
import Input from './Input'
import { useLocation } from 'wouter'
import { register } from '../services/Users'
import '../styles/Form.css'
import Spinner from './Spinner'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [location, setLocation] = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) return setLocation('/')
    setLoading(false)
  }, [])

  const validateInput = () => {
    if (!email) return setError('Email required')
    setError('')

    if (!password) return setError('Password required')
    setError('')
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      if (error || !email || !password) return setError('Complete the fields')

      await register(email, password)
      setLocation('/login')
    } catch (error) {
      setError('Email in use')
      console.log(error)
      setEmail('')
      setPassword('')
    }
  }

  return (
    <>
    {
      loading
        ? <Spinner />
        : (
          <div className="form">
            <h2 className="form__title">Register 🤟</h2>
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
                onClick={(event) => {
                  event.preventDefault()
                  console.log(`Redirected from ${location}`)
                  setLocation('/login')
                }}
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
