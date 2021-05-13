import CurrentlyReadingCard from './CurrentlyReadingCard.js'

const CurrentlyReadingSection = () => {
  return (
    <div className="mt-3">
      <div className="content flex justify-between">
        <span className="section-title">Currently Reading</span>
        <a>All</a>
      </div>
      <div className="mt-2">
        <div>
          <CurrentlyReadingCard />
        </div>
      </div>
    </div>
  )
}

export default CurrentlyReadingSection
