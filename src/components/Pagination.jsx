import React from 'react'

const Pagination = () => {
  const [page, setPage] = useState(0)
  const pageLength = 6
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
    if (page === 4) {
      setPage(maxPage)
    } else {
      setPage(page - pageLength)
    }
  }

  return (
    <div className="cards__pagination">
      <button
        className="cards__pagination--prev"
        onClick={handlePrev}>prev</button>
      <button
        className="cards__pagination--next"
        onClick={handleNext}>next</button>
    </div>
  )
}

export default Pagination
