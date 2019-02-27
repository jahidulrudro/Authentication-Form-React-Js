import React from 'react'
import { Row, Col } from 'reactstrap'

import FormContainer from '../FormContainer'
import BackgroundOverlay from '../BackgroundOverlay'

import formalinLogo from '../../assets/images/formalin.webp'

const Half = props => {
  return (
    <React.Fragment>
      <BackgroundOverlay />
      <Row className="h-100 align-items-center">
        <Col className="d-none d-md-flex flex-column">
          <img
            src={formalinLogo}
            alt="formalin logo"
            className="mb-4 mx-auto d-block"
          />
          <p className="h5 w-60 text-center subtitle">
            Beautiful Forms for your React App
          </p>
        </Col>

        <Col>
          <Row>
            <Col lg="8" md="10" className="mx-auto">
              <FormContainer commonProps={props.commonProps} />
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Half
