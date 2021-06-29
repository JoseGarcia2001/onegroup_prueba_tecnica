import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CardItem from './CardItem'
import Spinner from './Spinner'
import { handlePagination } from '../hooks/handlePagination'
import { initArticles } from '../reducers/articlesReducer'

const API_URL = 'https://onegroup-app-api.herokuapp.com'
// const API_URL = 'http://localhost:3001'

const Cards = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const {
    handleNext,
    handlePrev,
    results,
    page,
    articles,
    pageLength
  } = handlePagination()

  // Init State
  useEffect(() => {
    dispatch(initArticles())
    setLoading(false)
  }, [])

  return (
    <>
      {loading
        ? <Spinner />
        : <div className="cards-container">
            <div className="cards">
                {articles
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
      }
      </>
  )
}

export default Cards
