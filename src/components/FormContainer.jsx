import React from 'react'

import LoginForm from './LoginForm'
import OtpForm from './OtpForm'
import RegistrationForm from './RegistrationForm'
import PasswordRecoverForm from './PasswordRecoverForm'

const formContainerStyle = {
  border: '1px solid rgba(0, 0, 0, 0.2)',
  padding: '30px 35px',
  borderRadius: '5px',
  overflow: 'hidden',
  boxShadow: '2px 2px 7px rgba(0, 0, 0, 0.1)'
}

const FormContainer = props => {
  const { commonProps } = props
  const { currentForm } = commonProps

  return (
    <div style={formContainerStyle}>
      <h1 className="d-sm-block d-md-none">Formalin</h1>
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
