import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import imgNotFound from '../assets/cover-not-found.jpg'
import { BookContext } from '../BookContext.js'
import { useContext } from 'react'

const BookCard = ({ book }) => {
  let history = useHistory()

  const { setSelectedBook } = useContext(BookContext)
  const bookDetails = () => {
    setSelectedBook(book)
    history.push('/details')
  }
  return (
    <div className="book-card flex flex-column justify-between">
      <div>
        <img onClick={ () => bookDetails() } className="book-cover" alt="book-cover" src={ book.imgCover || imgNotFound }></img>
      </div>
      <div>
        <p onClick={ () => bookDetails() } className="book-title ellipsis">{ book.title }</p>
        <p className="book-author ellipsis">{ book.author === 'Unkown author' ? '' : 'by' } { book.author }</p>
      </div>
    </div>
  )
}

BookCard.defaultProps = {
  book: {}
}

BookCard.propTypes = {
  book: PropTypes.object
}

export default BookCard
