import React from 'react'
import startImage from '../assets/images/Icons/start.svg'
import configImage from '../assets/images/Icons/config.svg'
import PropTypes from 'prop-types'
import '../styles/cardItem.css'

const CardItem = ({ title, price, image, rating, description }) => {
  return (
  <div className="cards__item" style={{}}>
    <img
      className="cards__item-image"
      src={image}
      alt={description}>
    </img>
    <div className="card__info">
      <p className="card__info-title">{title}</p>
      <p className="card__info-price">{`$${price} COP`}</p>
      <div className="card__specialInfo">
        <div className="card__specialInfo-rating">
          <img
            src={startImage}
            alt="Qualification">
          </img>
          <p>{rating}</p>
        </div>
        <img
          className="card__specialInfo-setting"
          alt="card-settings"
          src={configImage}>
        </img>
      </div>
    </div>
  </div>
  )
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string
}

export default CardItem
