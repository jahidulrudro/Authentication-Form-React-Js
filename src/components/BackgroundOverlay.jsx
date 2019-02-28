import React from 'react'
import Particles from 'react-particles-js'

import bgImage from '../assets/images/snowBackground.jpg'
import { snow, nightSky } from '../_particlesConfigs'

const bgImageStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'left bottom',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  position: 'absolute',
  overflow: 'hidden',
  left: '0',
  top: '0',
  zIndex: -1
}

const bgGradientStyle = {
  ...bgImageStyle,
  background: 'linear-gradient(82deg, rgba(0,0,0,1) 0%, rgba(41,45,71,1) 100%)'
}

const particlesStyle = {
  ...bgImageStyle,
  background: 'rgba(0, 0, 0, 0.1)',
  zIndex: 0
}

export default class BackgroundOverlay extends React.PureComponent {
  render() {
    const particlesParam = this.props.type === 'nightSky' ? nightSky : snow

    return (
      <React.Fragment>
        <Particles style={particlesStyle} params={particlesParam} />
        {this.props.type === 'nightSky' ? (
          <div style={bgGradientStyle} />
        ) : (
          <div style={bgImageStyle} />
        )}
      </React.Fragment>
    )
  }
}
