import React from 'react'
import { Col, Row } from 'reactstrap'

import FormContainer from '../FormContainer'

const Default = props => {
  const { commonProps } = props

  return (
    <Row className="h-100" style={{ alignItems: 'center' }}>
      <Col md="6" sm="12" className="mx-auto">
        <Row>
          <Col lg="8" md="10" className="mx-auto">
            <FormContainer commonProps={commonProps} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Default
