import React from 'react'
import { Row, Col } from 'reactstrap'

import FormContainer from '../FormContainer'
import BackgroundOverlay from '../BackgroundOverlay'

const Gradient = props => {
  return (
    <React.Fragment>
      <BackgroundOverlay type="gradientAnimation" />
      <Row className="h-100 align-items-center justify-content-center">
        <Col md="6">
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

export default Gradient
