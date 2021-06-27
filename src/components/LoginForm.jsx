import React, { useState, useContext } from 'react'
import { context } from '../hooks/UserContext.jsx'
import emailIcon from '../assets/images/Icons/mail.svg'
import lockIcon from '../assets/images/Icons/lock.svg'
import Input from './Input'
import PropTypes from 'prop-types'

const LoginForm = ({ children }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, setUser } = useContext(context)
  console.log(user, 'Login')

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(email)
    console.log(password)
    setUser({ user: ':DD' })
    console.log('Logged')
    // sessionStorage.setItem('user', 'true')
    setEmail('')
    setPassword('')
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
          <div className="form__fields">
            <Input
              name='email'
              onChangeHandle={({ target }) => setEmail(target.value)}
              image={emailIcon}
              placeholder='Email'
              type="email"
              value={email}
              />
            <Input
              name='password'
              onChangeHandle={({ target }) => setPassword(target.value)}
              image={lockIcon}
              placeholder='Password'
              type="password"
              value={password}
              />
          </div>
          <button className="form__button">Sign In</button>
          {children}
        </form>
      </div>
  )
}

LoginForm.propTypes = {
  children: PropTypes.element
}

export default LoginForm