import { useState, useContext } from 'react'
import imgNotFound from '../assets/cover-not-found.jpg'
import { BookContext } from '../BookContext.js'
import { useHistory } from 'react-router-dom'
import { FaRegChartBar } from 'react-icons/fa'

const PreviewBookCard = () => {
  let history = useHistory()

  const { setSelectedBook } = useContext(BookContext)
  const searchBook = (book) => {
    setSelectedBook(book)
    history.push('/details')
  }

  const [book] = useState({
    id: 'LehDDwAAQBAJ',
    title: 'A ilha',
    author: 'Aldous Huxley',
    description: '<p>De volta às livrarias com nova tradução e novo projeto gráfico, <i>A ilha</i> foi o último romance escrito por Aldous Huxley, publicado originalmente no início dos anos 1960. Na obra, o escritor volta a falar de uma sociedade idealizada, como em <i>Admirável mundo novo</i>, escrito três décadas antes, mas sob uma óptica diferente. Em vez de situar seus personagens em um futuro sombrio, dominado pelo consumo e por sofisticados mecanismos de controle social, o autor elegeu uma ilha fictícia como palco de uma civilização que persegue serenamente a felicidade. Lá a utopia da existência plena é possível, e esse é o grande tema da discussão proposta na obra por Huxley.</p> <p>Ao sofrer um naufrágio, o jornalista e dublê de negociante Will Farnaby vai parar acidentalmente na costa da ilha Pala. Lá, ele encontra uma civilização em que as utopias políticas dão lugar à prática do que a humanidade tem de mais valoroso. À medida que se familiariza com o estilo de vida na ilha, Will descobre que os alicerces daquele povo foram lançados duas gerações atrás pelo Velho Rajá, grande autoridade espiritual, e pelo médico e cientista escocês Andrew MacPhail para conciliar o melhor das culturas oriental e ocidental. Budismo e ciência encontram ali um equilíbrio sábio.</p> <p>Um livreto filosófico chamado <i>Notas sobre o que é o quê e sobre o que seria razoável fazer a respeito disso</i>, escrito pelo Velho Rajá, é uma espécie de guia para os habitantes de Pala. A população da ilha renega o consumismo e o progresso tecnológico sem propósito. Hipnose, meditação, técnicas de ioga sexual e uma droga que permite mergulhar na autoconsciência—o moksha—fazem parte da vida cotidiana e aproximam as pessoas da realização de suas potencialidades.</p>',
    imgCover: 'http://books.google.com/books/publisher/content?id=LehDDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE7160gwDRfC4In-rDrYVm5TXd-oZ_Zct1RuWhIN9b8Tx0C6vY4zGqPdaBdBYUmi15lDv_bUr_qpBKgFRUYJlvQsJpvTi0dnDs7a8cFNEVUeDvKDcv2nPpq17EJq-Q3zfIQi-Gqmd&source=gbs_api'
  })
  return (
    <div className="discoverPreviewCard ml-1">
      <div className="flex">
        <div className="book-info flex flex-column justify-between">
          <div>
            <p onClick={ () => searchBook(book) } className="book-title-card ellipsis">{ book.title }</p>
            <p className="book-subtitle-card ellipsis">{ book.author }</p>
          </div>
          <div className="flex">
            <FaRegChartBar /><p className="book-info-card ellipsis">90+ Read Now</p>
          </div>
        </div>
        <div className="img-content">
          <img onClick={ () => searchBook(book) } className="book-img" src={ book.imgCover || imgNotFound } alt="book-cover"></img>
        </div>
      </div>
    </div>
  )
}

export default PreviewBookCard
