import React from 'react'
import { Row, Col } from 'reactstrap'

import FormContainer from '../FormContainer'
import BackgroundOverlay from '../BackgroundOverlay'

const Half = props => {
  return (
    <React.Fragment>
      <BackgroundOverlay />
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

export default Half
