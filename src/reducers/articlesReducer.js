export const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case '@articles/init':
      return action.payload

    case '@articles/create':
      return [action.payload, ...state]

    default:
      return state
  }
}

export const initArticles = (articles) => {
  return {
    type: '@articles/init',
    payload: articles
  }
}

export const createArticle = (article) => {
  return {
    type: '@articles/create',
    payload: article
  }
}
