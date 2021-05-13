import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const InputSearch = ({ onUpdate }) => {
  let history = useHistory()
  let location = useLocation()

  const [input, setInput] = useState('')
  const onInput = (value) => {
    if (!value && history.location.pathname !== '/') {
      history.push('/')
    }
    if (value && history.location.pathname !== '/search') {
      history.push('/search')
    }
    setInput(value)
    onUpdate(value)
  }

  useEffect(() => {
    if (location.pathname === '/') {
      setInput('')
    }
    return () => {}
  }, [location])

  return (
    <div>
      <input className="searchInput" value={ input } onChange={ (e) => onInput(e.target.value)} placeholder="Search book" type="text" />
    </div>
  )
}

InputSearch.propTypes = {
  onUpdate: PropTypes.func
}

export default InputSearch
