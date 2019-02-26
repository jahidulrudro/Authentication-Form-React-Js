import React from 'react'
import { Col, Row } from 'reactstrap'

import FormContainer from './FormContainer'

const Default = props => {
  const { commonProps } = props
  const { logoImage } = commonProps

  return (
    <Row className="h-100" style={{ alignItems: 'center' }}>
      <Col md="6" sm="12">
        <Row>
          <Col lg="8" md="10" className="mx-auto">
            <FormContainer commonProps={commonProps} />
          </Col>
        </Row>
      </Col>
      <Col className="d-none d-sm-none d-md-flex">
        <div>
          <img src={logoImage} alt="Logo" className="img-fluid" />
        </div>
      </Col>
    </Row>
  )
}

export default Default
