import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import articles from '../services/Articles'
import Cards from './Cards'
import CreateProductForm from './CreateProductForm'
import { useDispatch } from 'react-redux'
import { initArticles } from '../reducers/articlesReducer'

const Main = () => {
  const [location, setLocation] = useLocation()
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const dispatch = useDispatch()

  // valid User
  useEffect(() => {
    const localUser = localStorage.getItem('user')
    if (!localUser) {
      console.log(`Redirected from ${location}`)
      setLocation('/login')
    }
  }, [])

  // Init State
  useEffect(() => {
    articles.setToken()
    articles.getAll()
      .then(articles => {
        dispatch(initArticles(articles))
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <main>
      <div className="main__manage-articles">
        <button className="form__button">
          Delete all
        </button>
        <button
          className="form__button"
          onClick={() => setCreateModalOpen(!createModalOpen)}>
          Create new
        </button>
      </div>
      <CreateProductForm isOpen={createModalOpen} />
      <Cards/>
    </main>
  )
}

export default Main
