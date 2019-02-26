import React from 'react'
import { Fade } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const loadingStyle = {
  left: 0,
  top: 0,
  zIndex: 9
}

const Loading = () => {
  return (
    <Fade
      tag="div"
      className="d-flex align-items-center vh-100 vw-100 bg-white position-absolute"
      style={loadingStyle}>
      <FontAwesomeIcon icon="spinner" size="4x" className="mx-auto fa-pulse" />
    </Fade>
  )
}

export default Loading
