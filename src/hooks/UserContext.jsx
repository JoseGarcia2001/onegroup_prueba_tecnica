import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const context = React.createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ data: '' })

  return (
    <context.Provider value={{ user, setUser }}>
      {children}
    </context.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.any
}
