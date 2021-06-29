import { useState } from 'react'
import { useSelector } from 'react-redux'

export const handlePagination = () => {
  const [page, setPage] = useState(0)
  const pageLength = 8
  const results = page + pageLength
  const articles = useSelector(state => state)
  const numOfPages = Math.ceil(articles.length / pageLength)
  const maxPage = ((numOfPages * pageLength) - pageLength)

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

  return { handleNext, handlePrev, results, page, articles, pageLength }
}
