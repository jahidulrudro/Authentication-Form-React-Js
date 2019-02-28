import React from 'react'
import { Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import formalinLogo from '../assets/images/formalin.webp'

const SideHeader = () => {
  return (
    <Col className="d-none d-md-flex flex-column">
      <img
        src={formalinLogo}
        alt="formalin logo"
        className="mb-4 mx-auto d-block"
      />
      <p className="h5 w-60 text-center subtitle">
        Beautiful Forms for your React App
      </p>
      <ul className="d-flex justify-content-center align-items-center list-unstyled mt-2">
        <li
          className="rounded-circle px-2 py-1 mr-1 text-center"
          style={{ width: '32px', backgroundColor: '#3b5998' }}>
          <a href="/" className="text-white">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
        </li>
        <li className="rounded-circle px-2 py-1 mr-1 bg-danger ">
          <a href="/" className="text-white">
            <FontAwesomeIcon icon={['fab', 'google']} />
          </a>
        </li>
        <li
          className="rounded-circle px-2 py-1 mr-1"
          style={{ backgroundColor: '#0077B5' }}>
          <a href="/" className="text-white">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
        </li>
        <li className="rounded-circle px-2 py-1 mr-1 bg-primary">
          <a href="/" className="text-white">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </li>
      </ul>
    </Col>
  )
}

export default SideHeader
