import React from 'react'
import { Row, Col } from 'reactstrap'

import FormContainer from '../FormContainer'
import BackgroundOverlay from '../BackgroundOverlay'

const Half = props => {
  return (
    <React.Fragment>
      <BackgroundOverlay />
      <Row className="h-100 align-items-center">
        <Col>
          <Row>
            <Col lg="8" md="10" className="mx-auto">
              <FormContainer commonProps={props.commonProps} />
            </Col>
          </Row>
        </Col>

        <Col className="d-none d-md-flex">
          <h1 className="w-100 text-center">Formalin</h1>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Half
