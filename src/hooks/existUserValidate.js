import { useEffect } from 'react'
import { useLocation } from 'wouter'

export const existUserValidate = (routeToNav, setLoad) => {
  const [, setLocation] = useLocation()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setLocation(routeToNav)
    }

    setLoad(false)
  }, [])
}
