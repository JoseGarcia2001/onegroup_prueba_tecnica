import React, { useContext } from 'react'
import logout from '../assets/images/Icons/logout.svg'
import avatar from '../assets/images/avatar.jpg'
import PropTypes from 'prop-types'
import { context } from '../hooks/UserContext.jsx'

const Header = ({ isLogged }) => {
  const { user, setUser } = useContext(context)
  console.log(user, 'Header')
  return (
    <header className="header">
    <h1 className="header__logo"><strong>ONE</strong>GROUP</h1>
    { isLogged &&
      (<div className="header__user">
        <button className="header__user-logout">
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
