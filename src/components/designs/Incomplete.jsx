import React from 'react'
import { Row, Col } from 'reactstrap'

import FormContainer from '../FormContainer'
import BackgroundOverlay from '../BackgroundOverlay'
import SideHeader from '../SideHeader'

const Incomplete = props => {
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

        <SideHeader />
      </Row>
    </React.Fragment>
  )
}

export default Incomplete
