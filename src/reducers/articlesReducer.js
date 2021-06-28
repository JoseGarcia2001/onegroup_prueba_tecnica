import articles from '../services/Articles'

export const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case '@articles/init':
      return action.payload

    case '@articles/create':
      return [...state, action.payload]

    case '@articles/delete':
      return state.filter(item => item._id !== action.payload)

    case '@articles/update':
      return state.map(item => {
        if (item._id === action.payload.id) {
          return {
            ...action.payload.updatedItem
          }
        }

        return item
      })

    default:
      return state
  }
}

export const initArticles = () => {
  return async (dispatch) => {
    articles.setToken()
    const allArticles = await articles.getAll()

    dispatch({
      type: '@articles/init',
      payload: allArticles
    })
  }
}

export const createArticle = (itemToCreate) => {
  return async (dispatch) => {
    const createdArticle = await articles.create(itemToCreate)

    dispatch({
      type: '@articles/create',
      payload: createdArticle
    })
  }
}

export const deleteArticle = (id) => {
  return async (dispatch) => {
    const deletedItem = await articles.delete(id)

    dispatch({
      type: '@articles/delete',
      payload: deletedItem._id
    })
  }
}

export const updateArticle = (id, propsToUpdate) => {
  return async (dispatch) => {
    const updatedItem = await articles.update(id, propsToUpdate)

    dispatch({
      type: '@articles/update',
      payload: { id, updatedItem }
    })
  }
}
