import { useState, useContext } from 'react'
import imgNotFound from '../assets/cover-not-found.jpg'
import { useHistory } from 'react-router-dom'
import { BookContext } from '../BookContext.js'
import { FaBook } from 'react-icons/fa'

const CurrentlyReadingCard = () => {
  let history = useHistory()

  const { setSelectedBook } = useContext(BookContext)
  
  const bookDetails = (book) => {
    setSelectedBook(book)
    history.push('/details')
  }

  const [book] = useState({
    id: 'VKm1RC2LzJsC',
    title: 'Farenheit 451',
    author: 'RAY BRADBURY',
    description: 'Escrito após o término da Segunda Guerra Mundial, em 1953, "Fahrenheit 451", de Ray Bradubury é um texto que condena não só a opressão anti-intelectual nazista, mas principalmente o cenário dos anos 1950, revelando sua apreensão numa sociedade opressiva e comandada pelo autoritarismo do mundo pós-guerra. O livro se propõe a descrever um governo totalitário, num futuro incerto, mas próximo, que proíbe qualquer livro ou tipo de leitura, prevendo que o povo possa ficar instruído e se rebelar contra o status quo. Tudo é controlado e as pessoas só têm conhecimento dos fatos por aparelhos de TVs instalados em suas casas ou em praças ao ar livre. A leitura deixou de ser meio para aquisição de conhecimento crítico e tornou-se tão instrumental quanto a vida dos cidadãos, suficiente apenas para que saibam ler manuais e operar aparelhos.',
    imgCover: 'http://books.google.com/books/content?id=VKm1RC2LzJsC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70M9FZlrQGrOc3ssKOQFzx2xnL1FIkTDf15LsVPxnRkys7UFNUnb-E59rnjnqjfB1oMkSfN5DqY4UyKXrRz9SLR5mHwpnPWQwYYfhV5jLLLnCgMgj8vqOlexo6pB7NgBvaHyxhw&source=gbs_api'
  })

  return (
    <div>
      <div className="currently-reading-card flex">
        <div className="flex items-center pl-1">
          <img onClick={ () => bookDetails(book) } className="book-img" src={ book.imgCover || imgNotFound } alt="book-cover"></img>
        </div>
        <div className="book-info ml-1 flex flex-column justify-between">
          <div>
            <p onClick={ () => bookDetails(book) } className="book-title-card ellipsis">{ book.title }</p>
            <p className="book-subtitle-card ellipsis">by { book.author }</p>
          </div>
          <div className="flex">
            <FaBook color="blue" /><p className="book-info-card ellipsis">Chapter <span>2</span> from { book.chapters }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentlyReadingCard
