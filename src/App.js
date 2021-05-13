import InputSearch from './components/InputSearch.js'
import MainFooter from './components/MainFooter.js'
import HomeContent from './pages/HomeContent.js'
import SearchContent from './pages/SearchContent.js'
import Details from './pages/Details.js'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BookContext } from './BookContext.js'

const App = () => {
  const [page, setPage] = useState(0)
  const [bookList, setBookList] = useState([])
  const [selectedBook, setSelectedBook] = useState({})

  const getMore = () => {
    getBooks(localStorage.getItem('lastSearch'))
  }

  const getBooks = async (query) => {
    let contextPage = page
    if (!query) return
    if (localStorage.getItem('lastSearch') !== query) {
      contextPage = 0
    }
    localStorage.setItem('lastSearch', query)
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?maxResults=9&startIndex=${contextPage}&q=${query}`)
    const list = data.items.map((book) => {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unkown author',
        description: book.volumeInfo.description || book.searchInfo?.textSnippet || '',
        imgCover: book.volumeInfo.imageLinks?.smallThumbnail || book.volumeInfo.imageLinks?.thumbnail
      }
    })

    if (contextPage === 0) {
      setBookList(list)
    } else {
      setBookList([...bookList, ...list])
    }
    setPage(contextPage + 1)
  }

  const updateQuery = (query) => {
    if (query) {
      getBooks(query)
    } else {
      setPage(0)
      setBookList([])
    }
  }

  return (
    <Router>
      <div className="app">
        <BookContext.Provider value={{ selectedBook, setSelectedBook }}>
          <Switch>
            <Route path="/details" exact>
              <Details />
            </Route>
            <Route path="/">
              <div className="main-page">
                <div className="content header">
                  <InputSearch onUpdate={ updateQuery } />
                </div>
                <div>
                  <Switch>
                    <Route path="/" exact>
                      <HomeContent />
                    </Route>
                    <Route path="/search" exact>
                      <SearchContent bookList={ bookList } searchMore={ getMore } />
                    </Route>
                    <Redirect from="*" to='/' />
                  </Switch>
                </div>
                <div>
                  <MainFooter />
                </div>
              </div>
            </Route>
          </Switch>
        </BookContext.Provider>
      </div>
    </Router>
  );
}

export default App;
