import React from 'react'
import Particles from 'react-particles-js'

import bgImage from '../assets/images/snowBackground.jpg'

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

const particlesStyle = {
  ...bgImageStyle,
  background: 'rgba(0, 0, 0, 0.1)',
  zIndex: 0
}

export default class BackgroundOverlay extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Particles
          style={particlesStyle}
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false
                }
              },
              size: {
                value: 5,
                random: true
              },
              move: {
                direction: 'bottom',
                out_mode: 'out'
              },
              line_linked: {
                enable: false
              }
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: 'remove'
                }
              },
              modes: {
                remove: {
                  particles_nb: 10
                }
              }
            }
          }}
        />
        <div style={bgImageStyle} />
      </React.Fragment>
    )
  }
}
