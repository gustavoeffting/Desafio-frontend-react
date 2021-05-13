import DiscoverBookCard from './DiscoverBookCard.js'
import PreviewBookCard from './PreviewBookCard.js'

const DiscoverBookList = () => {
  return (
    <div className="discover-book-list">
      <div className="content flex justify-between">
        <span className="section-title">Discover new book</span>
        <span className="link">More</span>
      </div>
      <div className="content pl-1 mt-1">
        <div className="flex items-center">
          <DiscoverBookCard />
          <PreviewBookCard />
        </div>
      </div>
    </div>
  )
}

export default DiscoverBookList
