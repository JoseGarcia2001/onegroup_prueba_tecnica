import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import Cards from '../components/Cards'
import CreateProductForm from '../components/CreateProductForm'
import Spinner from '../components/Spinner'

const Main = () => {
  const [location, setLocation] = useLocation()
  const [createModal, setCreateModal] = useState(false)
  const [loading, setLoading] = useState(true)

  // valid User
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      console.log(`Redirected from ${location}`)
      setLocation('/login')
    }
    setLoading(false)
  }, [])

  return (
    <>
    {
      loading
        ? <Spinner/>
        : <main>
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

    }
    </>
  )
}

export default Main
