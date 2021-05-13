import ovalDetail from '../assets/oval-curr-reading.png'
import videoThumbOne from '../assets/maxresdefault.jpeg'
import videoThumbTwo from '../assets/clean-code.jpg'
import videoThumbThree from '../assets/pragmatic-programmer.jpg'

const ReviewsOfTheDays = () => {
  return (
    <div className="reviews-of-the-days content mt-4">
      <div className="flex justify-between">
        <span className="section-title">Reviews of The Days</span>
        <a>All Video</a>
      </div>
      <div className="mt-2">
        <div>
          <div>
            <a href="https://www.youtube.com/watch?v=vBzBgewl4ac" rel="noreferrer" target="_blank">
              <div className="reviews">
                <img className="video-thumb" alt="" src={ videoThumbOne }></img>
                <img className="oval-details" alt="" src={ ovalDetail }></img>
              </div>
            </a>
          </div>
          <div className="mt-2">
            <a href="https://www.youtube.com/watch?v=f5d9zWdUr18" rel="noreferrer" target="_blank">
              <div className="reviews">
                <img className="video-thumb" alt="" src={ videoThumbTwo }></img>
                <img className="oval-details" alt="" src={ ovalDetail }></img>
              </div>
            </a>
          </div>
          <div className="mt-2">
            <a href="https://www.youtube.com/watch?v=rhCifsvEIkQ" rel="noreferrer" target="_blank">
              <div className="reviews">
                <img className="video-thumb" alt="" src={ videoThumbThree }></img>
                <img className="oval-details" alt="" src={ ovalDetail }></img>
              </div>
            </a>    
          </div>   
        </div>
      </div>
    </div>
  )
}

export default ReviewsOfTheDays
