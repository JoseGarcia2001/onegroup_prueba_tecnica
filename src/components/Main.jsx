import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import Cards from './Cards'
import CreateProductForm from './CreateProductForm'

const Main = () => {
  const [location, setLocation] = useLocation()
  const [createModal, setCreateModal] = useState(false)

  // valid User
  useEffect(() => {
    const localUser = localStorage.getItem('user')
    if (!localUser) {
      console.log(`Redirected from ${location}`)
      setLocation('/login')
    }
  }, [])

  return (
    <main>
      <div className="main__manage-articles">
        <button
          className="form__button"
          onClick={() => setCreateModal(true)}>
          Create new
        </button>
      </div>
      {
        createModal &&
          <CreateProductForm handleClose={() => setCreateModal(false)}/>
      }
      <Cards/>
    </main>
  )
}

export default Main
