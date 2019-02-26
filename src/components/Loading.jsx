import React from 'react'
import { Fade } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading = () => {
  return (
    <Fade tag="div" className="d-flex align-items-center h-100">
      <FontAwesomeIcon icon="spinner" size="4x" className="mx-auto fa-pulse" />
    </Fade>
  )
}

export default Loading
