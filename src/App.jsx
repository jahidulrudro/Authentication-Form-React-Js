import React, { lazy, useState } from 'react'
import { Container } from 'reactstrap'

import logoImage from './assets/images/logoImage.png'

import Loading from './components/Loading'
import Settings from './components/Settings'

const Default = lazy(() => import('./components/designs/Default'))
const Half = lazy(() => import('./components/designs/Half'))
const Adha = lazy(() => import('./components/designs/Adha'))
const Snowy = lazy(() => import('./components/designs/Snowy'))
const Edge = lazy(() => import('./components/designs/Edge'))
const Median = lazy(() => import('./components/designs/Median'))

const App = () => {
  // You can change the design to any of the below styles
  // 'default', 'edge', 'median', 'half', 'adha', 'snowy'
  const [design, setDesign] = useState('snowy')

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
          ) : design === 'snowy' ? (
            <Snowy commonProps={commonProps} />
          ) : null}
        </React.Suspense>
      </Container>
      <Settings commonProps={commonProps} />
    </React.Fragment>
  )
}

export default App
