import { FaBookOpen, FaHeadphones, FaShareSquare } from 'react-icons/fa'

const DetailsFooter = () => {
  return (
    <div className="content">
      <div>
        <div className="details-footer flex items-center">
          <div className="flex justify-center">
            <FaBookOpen color="grey" />
            <p className="details-footer-options">Read</p>
          </div>
          <div className="flex justify-center">
            <FaHeadphones color="grey" />
            <p className="details-footer-options">Listen</p>
          </div>
          <div className="flex justify-center">
            <FaShareSquare color="grey" />
            <p className="details-footer-options">Share</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsFooter
