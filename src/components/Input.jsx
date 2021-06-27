import React from 'react'
import '../styles/Input.css'
import PropTypes from 'prop-types'

const Input = ({ image, placeholder, type, value, onChangeHandle, name }) => {
  return (
    <div className="input">
      <img className="input__img" src={image} alt="" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChangeHandle}>
      </input>
  </div>
  )
}

Input.propTypes = {
  image: PropTypes.any,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChangeHandle: PropTypes.func,
  name: PropTypes.string
}

export default Input
