import React from 'react'
import { Row, Col } from 'reactstrap'

import FormContainer from './FormContainer'

const Half = props => {
  return (
    <React.Fragment>
      <Row className="h-100 align-items-center">
        <Col className="d-none d-md-flex">
          <h1 className="w-100 text-center">Formalin</h1>
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
