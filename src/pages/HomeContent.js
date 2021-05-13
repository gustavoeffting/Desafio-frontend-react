import DiscoverBookList from '../components/DiscoverBookList.js'
import handHome from '../assets/hand-home.png'
import CurrentlyReadingSection from '../components/CurrentlyReadingSection.js'
import ReviewsOfTheDays from '../components/ReviewsOfTheDays.js'

const HomeContent = () => {
  return (
    <div>
      <div className="mt-3 content flex justify-start">
        <span className="homeName">Hi,
          <span className="homeNameContrast">
            Mehmed Al Fatih
          </span>
          <img className="hand-icon" src={ handHome } alt="hand-icon"></img> 
        </span>
      </div>
      <div className="mt-3">
        <DiscoverBookList />
        <CurrentlyReadingSection />
        <ReviewsOfTheDays />
      </div>
    </div>
  )
}

export default HomeContent
