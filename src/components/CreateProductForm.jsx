import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Articles from '../services/Articles'
import closeIcon from '../assets/images/Icons/close.svg'
import { useDispatch } from 'react-redux'
import { createArticle } from '../reducers/articlesReducer'

const CreateProductForm = ({ isOpen }) => {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [score, setScore] = useState()
  const [file, setFile] = useState()
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const formRef = useRef()

  const openStyle = isOpen ? 'create-form' : 'create-form inactive'

  const handleInputFile = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      if (!name || !price || !score) {
        return setError('Complete the fields')
      }

      const articleData = new FormData()

      articleData.append('image', file)
      articleData.append('title', name)
      articleData.append('price', price)
      articleData.append('rating', score)

      const createdArticle = await Articles.create(articleData)
      dispatch(createArticle(createdArticle))

      setError('')
      formRef.current.classList.add('inactive')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div ref={formRef} className={openStyle}>
      <form onSubmit={handleSubmit}>
        <button
          onClick={() => formRef.current.classList.add('inactive')}
          className="form__button--close">
          <img src={closeIcon}></img>
        </button>
        <h3>Create product</h3>
        <label>
          <span>Attach the image</span><br/>
          <small style={{ color: 'gray' }}>
          (The file name must not contain spaces)
          </small>
          <input
          name="image"
          type='file'
          accept=".jpg, .jpeg, .png"
          onChange={handleInputFile}
          >
          </input>
        </label>
        <label>
          <span>Product name</span>
          <input
            className="form__input"
            placeholder="Name"
            onChange={({ target }) => setName(target.value)}
            >
            </input>
        </label>
        <label>
          <span>Product price</span>
          <input
            className="form__input"
            placeholder="Price"
            onChange={({ target }) => setPrice(target.value)}
            type="number">
            </input>
        </label>
        <label>
          <span>Product score</span>
          <input
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
          Create article
        </button>
      </form>
    </div>
  )
}

CreateProductForm.propTypes = {
  isOpen: PropTypes.bool
}

export default CreateProductForm
