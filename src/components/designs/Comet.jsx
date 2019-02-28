import React from 'react'
import { Row, Col } from 'reactstrap'

import FormContainer from '../FormContainer'
import BackgroundOverlay from '../BackgroundOverlay'

const Comet = props => {
  const { logoImage } = props.commonProps

  return (
    <React.Fragment>
      <BackgroundOverlay type="nightSky" />
      <Row className="h-100 align-items-center">
        <Col md="6" sm="12">
          <Row>
            <Col lg="8" md="10" className="mx-auto">
              <FormContainer commonProps={props.commonProps} />
            </Col>
          </Row>
        </Col>
        <Col className="d-none d-sm-none d-md-flex">
          <div className="mr-auto">
            <img src={logoImage} alt="Logo" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Comet
