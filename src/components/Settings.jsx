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

const activeButtonStyle = {
  boxShadow: '0 0 0 0.2rem rgba(38,143,255,.5)'
}

const Settings = props => {
  const [visible, setVisible] = useState(false)
  const { currentForm, setCurrentForm, design, setDesign } = props.commonProps

  // List of Page Designs
  const pageDesigns = [
    { designName: 'default', text: 'Default' },
    { designName: 'edge', text: 'Edge' },
    { designName: 'median', text: 'Median' },
    { designName: 'half', text: 'Half' },
    { designName: 'incomplete', text: 'Incomplete' },
    { designName: 'snowy', text: 'Snowy' },
    { designName: 'night', text: 'Night' },
    { designName: 'owl', text: 'Owl' },
    { designName: 'comet', text: 'Comet' },
    { designName: 'gradient', text: 'Gradient' }
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
      className="d-none d-md-block"
      style={visible ? settingsContainerStyle : settingsContainerHiddenStyle}>
      <div style={settingsIconStyle} onClick={() => setVisible(!visible)}>
        <FontAwesomeIcon icon="spinner" className="fa-pulse" size="2x" />
      </div>
      <Container className="text-center">
        <h5 className="my-3">Design</h5>
        <Row>
          {pageDesigns.map((d, index) => (
            <Col className="mb-1 mx-auto" md="6" key={index}>
              <Button
                color="primary"
                block
                style={design === d.designName ? activeButtonStyle : {}}
                onClick={() => setDesign(d.designName)}>
                {d.text}
              </Button>
            </Col>
          ))}
        </Row>

        <h5 className="my-3">Form</h5>
        <Row>
          {formStyles.map((s, index) => (
            <Col className="mb-1" key={index}>
              <Button
                color="primary"
                block
                style={currentForm === s.formName ? activeButtonStyle : {}}
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
