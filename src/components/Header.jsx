import React, { useState, useEffect } from 'react'
import logout from '../assets/images/Icons/logout.svg'
import avatar from '../assets/images/avatar.jpg'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import articles from '../services/Articles'

const Header = () => {
  const [isLogged, setIsLogged] = useState()
  const [location, setLocation] = useLocation()

  useEffect(() => {
    const user = localStorage.getItem('user')
    user
      ? setIsLogged(true)
      : setIsLogged(false)
  })

  const handleLogout = () => {
    articles.setToken('')
    localStorage.clear()
    console.log(`Redirected from ${location}`)
    setLocation('/login')
  }

  return (
    <header className="header">
    <h1 className="header__logo"><strong>ONE</strong>GROUP</h1>
    { isLogged &&
      (<div className="header__user">
        <button
          className="header__user-logout"
          onClick={handleLogout}
          >
          <img src={logout} alt="Logout Button"></img>
        </button>
        <img className="header__user-avatar" src={avatar} alt="Avatar"></img>
      </div>)
    }
  </header>
  )
}

Header.propTypes = {
  isLogged: PropTypes.bool
}

export default Header
