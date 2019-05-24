import React, { lazy, useState } from 'react'
import { Container } from 'reactstrap'

import logoImage from './assets/images/dummyLogoImage.png'

import Loading from './components/Loading'
import Settings from './components/Settings'

const Default = lazy(() => import('./components/designs/Default'))
const Half = lazy(() => import('./components/designs/Half'))
const Incomplete = lazy(() => import('./components/designs/Incomplete'))
const Snowy = lazy(() => import('./components/designs/Snowy'))
const Edge = lazy(() => import('./components/designs/Edge'))
const Median = lazy(() => import('./components/designs/Median'))
const Night = lazy(() => import('./components/designs/Night'))
const Owl = lazy(() => import('./components/designs/Owl'))
const Comet = lazy(() => import('./components/designs/Comet'))
const Gradient = lazy(() => import('./components/designs/Gradient'))

const App = () => {
  // You can change the design to any of the below styles
  // 'default', 'edge', 'median',
  // 'half', 'incomplete', 'snowy',
  // 'night', 'owl', 'comet', 'gradient'
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
          ) : design === 'incomplete' ? (
            <Incomplete commonProps={commonProps} />
          ) : design === 'snowy' ? (
            <Snowy commonProps={commonProps} />
          ) : design === 'night' ? (
            <Night commonProps={commonProps} />
          ) : design === 'owl' ? (
            <Owl commonProps={commonProps} />
          ) : design === 'comet' ? (
            <Comet commonProps={commonProps} />
          ) : design === 'gradient' ? (
            <Gradient commonProps={commonProps} />
          ) : null}
        </React.Suspense>
      </Container>
      <Settings commonProps={commonProps} />
    </React.Fragment>
  )
}

export default App
