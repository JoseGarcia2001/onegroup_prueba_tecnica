import React, { useState } from 'react'
import PropTypes from 'prop-types'
import closeIcon from '../assets/images/Icons/close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { updateArticle } from '../reducers/articlesReducer'

const EditProductForm = ({ handleClose, id, handleCloseOnSend }) => {
  const itemToEdit = useSelector(state => state.find(item => item._id === id))

  const [title, setName] = useState(itemToEdit.title)
  const [price, setPrice] = useState(itemToEdit.price)
  const [rating, setScore] = useState(itemToEdit.rating)
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const handleUpdate = async (event) => {
    try {
      event.preventDefault()

      if (!title || !price || !rating) {
        return setError('Complete the fields')
      }

      const propsToUpdate = {
        title,
        price,
        rating
      }

      dispatch(updateArticle(id, propsToUpdate))

      handleClose()
      handleCloseOnSend()
      setError('')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={'create-form'}>
      <form onSubmit={handleUpdate}>
        <button
          type="button"
          onClick={handleClose}
          className="form__button--close">
          <img src={closeIcon}></img>
        </button>
        <h3>Edit product</h3>
        <label>
          <span>Product name</span>
          <input
            value={title}
            className="form__input"
            placeholder="Name"
            onChange={({ target }) => setName(target.value)}
            >
            </input>
        </label>
        <label>
          <span>Product price</span>
          <input
            value={price}
            className="form__input"
            placeholder="Price"
            onChange={({ target }) => setPrice(target.value)}
            type="number">
            </input>
        </label>
        <label>
          <span>Product score</span>
          <input
            value={rating}
            className="form__input"
            placeholder="Score"
            type="number"
            step="any"
            min='1'
            max="5"
            onChange={({ target }) => setScore(target.value)}
            >
            </input>
        </label>
        <span className="form__error">{error}</span>
        <button className="form__button">
          Send changes
        </button>
      </form>
    </div>
  )
}

EditProductForm.propTypes = {
  id: PropTypes.string,
  handleClose: PropTypes.func,
  handleCloseOnSend: PropTypes.func
}

export default EditProductForm
