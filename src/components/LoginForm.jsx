import React, { useState, useEffect } from 'react'
import Spinner from './Spinner'
import emailIcon from '../assets/images/Icons/mail.svg'
import lockIcon from '../assets/images/Icons/lock.svg'
import Input from './Input'
import { useLocation } from 'wouter'
import '../styles/Form.css'
import { login } from '../services/Users'
import articles from '../services/Articles'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useLocation()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setLocation('/')
    }

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

      if (error || !email || !password) {
        return setError('Complete the fields')
      }

      const user = await login(email, password)
      localStorage.setItem('user', JSON.stringify(user))
      articles.setToken()
      setLocation('/')
    } catch (error) {
      setError('Email and password do not match')
      setEmail('')
      setPassword('')
      console.log(error)
    }
  }
  return (
    <>
      {
        loading
          ? <Spinner />
          : (
            <div className="form">
              <h2 className="form__title">Login 😎</h2>
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
                  onClick={(event) => {
                    event.preventDefault()
                    console.log(`Redirected from ${location}`)
                    setLocation('/register')
                  }}
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
