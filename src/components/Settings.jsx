import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const settingsContainerStyle = {
  position: 'fixed',
  height: '100vh',
  width: '300px',
  top: '0',
  right: '0',
  backgroundColor: '#fff',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.1s ease-in-out',
  boxShadow: '-2px 2px 7px rgba(0, 0, 0, 0.1)'
}

const settingsContainerHiddenStyle = {
  ...settingsContainerStyle,
  right: '-301px'
}

const settingsIconStyle = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  lineHeight: '50px',
  top: '30%',
  right: '298px',
  textAlign: 'center',
  backgroundColor: '#fff',
  borderTopLeftRadius: '5px',
  borderBottomLeftRadius: '5px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRight: 'none',
  paddingTop: '5px',
  cursor: 'pointer',
  transition: 'all 0.1s ease-in-out',
  boxShadow: '-2px 2px 7px rgba(0, 0, 0, 0.1)'
}

const Settings = props => {
  const [visible, setVisible] = useState(true)
  const { setCurrentForm, setDesign } = props.commonProps

  // List of Page Designs
  const pageDesigns = [
    { designName: 'default', text: 'Default' },
    { designName: 'edge', text: 'Edge' },
    { designName: 'median', text: 'Median' }
  ]

  // List of Form Designs
  const formStyles = [
    { formName: 'login', text: 'Login' },
    { formName: 'register', text: 'Register' },
    { formName: 'recover-password', text: 'Forgot' },
    { formName: 'otp', text: 'OTP' }
  ]

  return (
    <div
      style={visible ? settingsContainerStyle : settingsContainerHiddenStyle}>
      <div style={settingsIconStyle} onClick={() => setVisible(!visible)}>
        <FontAwesomeIcon icon="spinner" className="fa-pulse" size="2x" />
      </div>
      <Container className="text-center">
        <h5 className="my-3">Design</h5>
        <Row>
          {pageDesigns.map(d => (
            <Col className="mb-1">
              <Button
                color="primary"
                block
                onClick={() => setDesign(d.designName)}>
                {d.text}
              </Button>
            </Col>
          ))}
        </Row>

        <h5 className="my-3">Form</h5>
        <Row>
          {formStyles.map(s => (
            <Col className="mb-1">
              <Button
                color="primary"
                block
                onClick={() => setCurrentForm(s.formName)}>
                {s.text}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Settings
