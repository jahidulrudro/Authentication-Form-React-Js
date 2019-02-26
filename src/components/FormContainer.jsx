import React from 'react'

import LoginForm from './LoginForm'
import OtpForm from './OtpForm'
import RegistrationForm from './RegistrationForm'
import PasswordRecoverForm from './PasswordRecoverForm'

import formalinLogo from '../assets/images/formalin.webp'

const formContainerStyle = {
  border: '1px solid rgba(0, 0, 0, 0.2)',
  backgroundColor: '#fff',
  padding: '30px 35px',
  borderRadius: '5px',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '-2px 2px 7px rgba(0, 0, 0, 0.1)'
}

const FormContainer = props => {
  const { commonProps } = props
  const { currentForm } = commonProps

  return (
    <div style={formContainerStyle}>
      <img
        src={formalinLogo}
        alt="formalin logo"
        className="mx-auto d-block d-md-none"
        style={{ width: '120px' }}
      />
      {currentForm === 'login' ? (
        <LoginForm commonProps={commonProps} />
      ) : currentForm === 'register' ? (
        <RegistrationForm commonProps={commonProps} />
      ) : currentForm === 'recover-password' ? (
        <PasswordRecoverForm commonProps={commonProps} />
      ) : currentForm === 'otp' ? (
        <OtpForm commonProps={commonProps} />
      ) : null}
    </div>
  )
}

export default FormContainer
