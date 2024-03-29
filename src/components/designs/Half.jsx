import React from 'react'
import { Row, Col } from 'reactstrap'

import FormContainer from '../FormContainer'
import BackgroundOverlay from '../BackgroundOverlay'
import SideHeader from '../SideHeader'

const Half = props => {
  return (
    <React.Fragment>
      <BackgroundOverlay />
      <Row className="h-100 align-items-center">
        <SideHeader />
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
