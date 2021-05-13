import PropTypes from 'prop-types'
import BookCard from '../components/BookCard.js'
import { useState } from 'react'

const SearchContent = ({ bookList, searchMore }) => {
  const [ isLoading, setIsLoading ] = useState(false)

  const requestMore = () => {
    if (isLoading) return
    setIsLoading(true)
    searchMore()
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }

  return (
    <div>
      {
        bookList.length === 0 ?
          <div className="content text-center mt-3">
            <span className="void-search">No results for this search</span>
          </div>
        :
          <div>
            <div className="search-content content">
              {
                bookList.map((book, index) => <BookCard book={ book } key={ index } />)
              }
              <br />
            </div>
            <div className="content">
              <button disabled={ isLoading } onClick={ () => requestMore() } className="btn-search-more">Search more</button>
            </div>
          </div>
      }
    </div>
  )
}

SearchContent.propTypes = {
  bookList: PropTypes.array,
  searchMore: PropTypes.func
}

export default SearchContent
