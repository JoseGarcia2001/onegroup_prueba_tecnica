import React, { useState } from 'react'
import startImage from '../assets/images/Icons/start.svg'
import configImage from '../assets/images/Icons/config.svg'
import ConfigPanel from './ConfigPanel'
import PropTypes from 'prop-types'
import '../styles/cardItem.css'

const CardItem = ({ title, price, image, rating, id }) => {
  const [configModal, setConfigModal] = useState(false)

  return (
  <div className="cards__item" style={{}}>
    <img
      className="cards__item-image"
      src={image}
      alt={title}>
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
        {configModal &&
          <ConfigPanel
            handleCloseConfig={() => setConfigModal(!configModal)}
            id={id} />
        }
        <button
          className="card__specialInfo-setting"
          onClick={() => setConfigModal(!configModal)}
          >
          <img
            alt="card-settings"
            src={configImage}>
          </img>
        </button>
      </div>
    </div>
  </div>
  )
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string
}

export default CardItem
