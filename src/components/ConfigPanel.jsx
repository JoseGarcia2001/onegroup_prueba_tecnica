import React, { useState } from 'react'
import editImage from '../assets/images/Icons/edit.svg'
import deleteImage from '../assets/images/Icons/delete.svg'
import EditProductForm from './EditProductForm'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteArticle } from '../reducers/articlesReducer'

const ConfigPanel = ({ id, handleCloseConfig }) => {
  const [editForm, setEditForm] = useState(false)

  const dispatch = useDispatch()

  const handleDelete = (itemId) => {
    dispatch(deleteArticle(itemId))
    handleCloseConfig()
  }

  return (
    <>
      <div className="card__modal">
        <button onClick={() => setEditForm(!editForm)}>
          <img src={editImage} alt="Edit button"></img>
          Edit article
        </button>
        <button onClick={() => handleDelete(id)}>
          <img src={deleteImage} alt="Delete button"></img>
          Delete article
        </button>
      </div>
      {editForm &&
        <EditProductForm
          id={id}
          handleClose={() => setEditForm(!editForm)}
          handleCloseOnSend={handleCloseConfig}
        />
      }
    </>
  )
}

ConfigPanel.propTypes = {
  id: PropTypes.string,
  handleCloseConfig: PropTypes.func
}

export default ConfigPanel
