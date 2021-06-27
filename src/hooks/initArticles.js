import { useState, useEffect } from 'react'
import Articles from '../services/Articles'

export const initArticles = () => {
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    setLoading(true)
    Articles.getAll()
      .then((articles) => {
        setArticles(articles)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  return { loading, articles }
}
