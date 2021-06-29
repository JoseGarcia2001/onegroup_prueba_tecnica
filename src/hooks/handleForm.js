import { useState } from 'react'

export const handleForm = (handleLoading, handleSend) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const validateInput = () => {
    if (!email) return setError('Email required')
    setError('')

    if (!password) return setError('Password required')
    setError('')
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      if (error || !email || !password) {
        return setError('Complete the fields')
      }
      handleLoading(true)

      await handleSend()
    } catch (error) {
      handleLoading(false)
      setError('Email and password do not match')
      setEmail('')
      setPassword('')
    }
  }
  return {
    validateInput,
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
    error
  }
}
