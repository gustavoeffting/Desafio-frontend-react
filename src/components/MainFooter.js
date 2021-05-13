import { useHistory } from 'react-router-dom'
import { FaBook, FaHome, FaRegUser } from 'react-icons/fa'

const MainFooter = () => {
  let history = useHistory()
  return (
    <div className="main-footer flex text-center">
      <div onClick={ () => history.push('/') }>
        <FaHome />
        <br />
        Home
      </div>
      <div>
        <FaBook />
        <br />
        Libraries
      </div>
      <div>
        <FaRegUser />
        <br />
        Profile
      </div>
    </div>
  )
}

export default MainFooter
