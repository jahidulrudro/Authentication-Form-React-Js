export const snow = {
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
}

export const nightSky = {
  "particles": {
      "number": {
          "value": 80,
          "density": {
              "enable": true,
              "value_area": 1500
          }
      },
      "line_linked": {
          "enable": true,
          "opacity": 0.02
      },
      "move": {
          "direction": "right",
          "speed": 0.05
      },
      "size": {
          "value": 1
      },
      "opacity": {
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.05
          }
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "push"
          }
      },
      "modes": {
          "push": {
              "particles_nb": 1
          }
      }
  },
  "retina_detect": true
}
