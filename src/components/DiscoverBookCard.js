import { useState, useContext } from 'react'
import imgNotFound from '../assets/cover-not-found.jpg'
import triangleBook from '../assets/triangle-book-detail.png'
import circleBook from '../assets/circle-book-detail.png'
import barBook from '../assets/bar-book-detail.png'
import { BookContext } from '../BookContext.js'
import { useHistory } from 'react-router-dom'
import { FaRegChartBar } from 'react-icons/fa'

const DiscoverBookCard = () => {
  let history = useHistory()

  const { setSelectedBook } = useContext(BookContext)
  const searchBook = (book) => {
    setSelectedBook(book)
    history.push('/details')
  }

  const [book] = useState({
    id: 'if5QDwAAQBAJ',
    title: '21 lições para o século 21',
    author: 'Yuval Noah Harari',
    description: 'O novo livro do autor de Sapiens e Homo Deus explora as grandes questões do presente e o que podemos fazer para melhorá-lo. Como podemos nos proteger de guerras nucleares, cataclismos ambientais e crises tecnológicas? O que fazer sobre a epidemia de fake news ou a ameaça do terrorismo? O que devemos ensinar aos nossos filhos? Em Sapiens, Yuval Noah Harari mostrou de onde viemos; em Homo Deus, para onde vamos. 21 lições para o século 21 explora o presente e nos conduz por uma fascinante jornada pelos assuntos prementes da atualidade. Seu novo livro trata sobre o desafio de manter o foco coletivo e individual em face a mudanças frequentes e desconcertantes. Seríamos ainda capazes de entender o mundo que criamos?',
    imgCover: 'http://books.google.com/books/publisher/content?id=if5QDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70ZjK3p747nqnQ-g3EYVbhgIUDsHT8tJHTp9RRpmB9Wil-WFfXvzmTC4oi788EUwn6ZDmfqbaPzvBTcaHFR3paUpBSjh-VCKMrR3DROrUC4FMKYWbB1-duy0Tnu3beOcbdG4_dO&source=gbs_api'
  })

  return (
    <div className="discoverMainCard">
      <div className="flex">
        <div className="book-info flex flex-column justify-between">
          <div>
            <p onClick={ () => searchBook(book) } className="book-title-card ellipsis">{ book.title }</p>
            <p className="book-subtitle-card ellipsis">{ book.author }</p>
          </div>
          <div className="flex">
            <FaRegChartBar /><p className="book-info-card ellipsis">120+ Read Now</p>
          </div>
        </div>
        <div className="img-content">
          <img className="book-img" src={ book.imgCover || imgNotFound } onClick={ () => searchBook(book) } alt="book-cover"></img>
          <img className="triangle-detail" src={ triangleBook } alt="triangle"></img>
          <img className="circle-detail" src={ circleBook } alt="circle"></img>
          <img className="bar-detail" src={ barBook } alt="bar"></img>
        </div>
      </div>
    </div>
  )
}

export default DiscoverBookCard
