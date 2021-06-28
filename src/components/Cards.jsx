import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardItem from './CardItem'
import Spinner from './Spinner'

// const API_URL = 'https://onegroup-app-api.herokuapp.com'
const API_URL = 'http://localhost:3001'

const Cards = () => {
  const [loading, setLoading] = useState(true)
  const articles = useSelector(state => state)

  useEffect(async () => {
    try {
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
        <div className="cards">
          {
            loading
              ? <Spinner />
              : articles.map(({ _id, title, price, image, rating }) =>
              <CardItem
                key={_id}
                title={title}
                price={price}
                image={`${API_URL}${image}`}
                rating={rating}
              />)
          }
        </div>
      </>
  )
}

export default Cards
