import React, { useState } from 'react'
import { Container } from 'reactstrap'

import Default from './components/Default'
import logoImage from './assets/logoImage.png'

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
      {design === 'default' ? <Default commonProps={commonProps} /> : null}
    </Container>
  )
}

export default App
