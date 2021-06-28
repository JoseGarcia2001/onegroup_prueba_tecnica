import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardItem from './CardItem'
import Spinner from './Spinner'
import { initArticles } from '../reducers/articlesReducer'

const API_URL = 'https://onegroup-app-api.herokuapp.com'
// const API_URL = 'http://localhost:3001'

const Cards = () => {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const dispatch = useDispatch()
  const pageLength = 4
  const results = page + pageLength
  const articles = useSelector(state => state)
  const numOfPages = Math.ceil(articles.length / pageLength)
  const maxPage = ((numOfPages * pageLength) - pageLength)
  // Init State
  useEffect(() => {
    dispatch(initArticles())
    setLoading(false)
  }, [])

  const handleNext = () => {
    if (page === maxPage) {
      setPage(0)
    } else {
      setPage(page + pageLength)
    }
  }

  const handlePrev = () => {
    if (page === 0) {
      setPage(maxPage)
    } else {
      setPage(page - pageLength)
    }
  }

  return (
    <div className="cards-container">
        <div className="cards">
          {
            loading
              ? <Spinner />
              : articles
                .slice(page, results)
                .map(({ _id, title, price, image, rating }) =>
              <CardItem
                key={_id}
                id={_id}
                title={title}
                price={price}
                image={`${API_URL}${image}`}
                rating={rating}
              />)
          }
        </div>
        <div className="cards__pagination">
          <button
            className="cards__pagination--prev"
            onClick={handlePrev}>
            &lt;
          </button>
          <p>{(Math.abs(page) / pageLength) + 1}</p>
          <button
            className="cards__pagination--next"
            onClick={handleNext}>&gt;
          </button>
        </div>
      </div>
  )
}

export default Cards
