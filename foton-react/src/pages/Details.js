import imgNotFound from '../assets/cover-not-found.jpg'
import DetailsFooter from '../components/DetailsFooter.js'
import { useEffect, useContext } from 'react'
import { BookContext } from '../BookContext.js'
import { useHistory } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const Details = () => {
  let history = useHistory()

  const { selectedBook } = useContext(BookContext)
  useEffect(() => {
    if (Object.keys(selectedBook).length === 0) {
      history.push('/')
    }
  }, [selectedBook, history])
  return (
    <div className="book-details">
      {
        (!selectedBook || selectedBook.constructor !== Object || Object.keys(selectedBook).length === 0) ?
          <div className="not-found details-header content text-center">
            <span>Not found</span>
          </div>
          :
          <div>
            <div className="details-header text-center">
              <span onClick={ () => history.goBack() } className="btn-back"><FaArrowLeft /></span>
              <img className="book-cover" src={ selectedBook.imgCover || imgNotFound } alt="book-cover"></img>
            </div>
            <div className="details-content content">
              <p className="book-title">{ selectedBook.title }</p>
              <p className="book-author">{ selectedBook.author }</p>
              <p className="book-description">{ selectedBook.description }</p>
            </div>
            <DetailsFooter />
          </div>
      }
    </div>
  )
}

export default Details
