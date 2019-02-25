import React from 'react'
import { Col, Row } from 'reactstrap'

import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const formContainerStyle = {
  border: '1px solid rgba(0, 0, 0, 0.2)',
  padding: '30px 35px',
  borderRadius: '5px',
  overflow: 'hidden',
  boxShadow: '2px 2px 7px rgba(0, 0, 0, 0.1)'
}

const Default = props => {
  const { currentForm, logoImage } = props.commonProps

  return (
    <Row className="h-100" style={{ alignItems: 'center' }}>
      <Col md="6" sm="12">
        <Row>
          <Col lg="8" md="10" className="mx-auto">
            <div style={formContainerStyle}>
              <h1 className="d-sm-block d-md-none">Formalin</h1>
              {currentForm === 'login' ? (
                <LoginForm commonProps={props.commonProps} />
              ) : currentForm === 'register' ? (
                <RegistrationForm commonProps={props.commonProps} />
              ) : currentForm === 'recover-password' ? (
                <h1>Recover Password</h1>
              ) : (
                <h1>OTP</h1>
              )}
            </div>
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
