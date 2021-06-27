import React, { useState, useEffect } from 'react'
import CardItem from './CardItem'
// import { initArticles } from '../hooks/initArticles'

import Articles from '../services/Articles'

const API_URL = 'http://localhost:3001'

const Cards = () => {
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

  return (
    <main>
        <div className="cards">
          {
            loading
              ? <h1>Loading...</h1>
              : articles.map(({ _id, title, price, image, description, rating }) =>
              <CardItem
                key={_id}
                title={title}
                price={price}
                image={`${API_URL}${image}`}
                description={description}
                rating={rating}
              />)
          }
        </div>
      </main>
  )
}

export default Cards
