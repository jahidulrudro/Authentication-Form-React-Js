import React, { lazy, useState } from 'react'
import { Container } from 'reactstrap'

import logoImage from './assets/images/logoImage.png'

import Loading from './components/Loading'
import Settings from './components/Settings'

const Default = lazy(() => import('./components/Default'))
const Half = lazy(() => import('./components/Half'))
const Adha = lazy(() => import('./components/Adha'))
const Edge = lazy(() => import('./components/Edge'))
const Median = lazy(() => import('./components/Median'))

const App = () => {
  // You can change the design to any of the below styles
  // 'default', 'edge', 'median', 'half', 'adha'
  const [design, setDesign] = useState('half')

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
    <React.Fragment>
      <Container className="vh-100 position-relative" fluid>
        <React.Suspense fallback={<Loading />}>
          {design === 'default' ? (
            <Default commonProps={commonProps} />
          ) : design === 'edge' ? (
            <Edge commonProps={commonProps} />
          ) : design === 'median' ? (
            <Median commonProps={commonProps} />
          ) : design === 'half' ? (
            <Half commonProps={commonProps} />
          ) : design === 'adha' ? (
            <Adha commonProps={commonProps} />
          ) : null}
        </React.Suspense>
      </Container>
      <Settings commonProps={commonProps} />
    </React.Fragment>
  )
}

export default App
