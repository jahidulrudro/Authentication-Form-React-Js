import React, { useState } from 'react'
import { Container } from 'reactstrap'
import logoImage from './assets/logoImage.png'

import Default from './components/Default'

const App = () => {
  // You can change the design to any of the below styles
  // 'default'
  const [design, setDesign] = useState('default')
  // You can change the form of any of the below types
  // login, register, recover-password, otp
  const [currentForm, setCurrentForm] = useState('login')

  const commonProps = {
    design,
    setDesign,
    currentForm,
    setCurrentForm,
    logoImage
  }

  return (
    <Container className="vh-100" fluid>
      <Default commonProps={commonProps} />
    </Container>
  )
}

export default App
