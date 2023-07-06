particlesJS('particles-js', {
  particles: {
    number: {
      value: 8,
      density: {
        enable: true,
        value_area: 1800,
      },
    },
    color: {
      value: ['#dc1c2e', '#0b3696'],
    },
    shape: {
      type: 'image',
      stroke: {
        width: 0,
        color: 'transparent',
      },
      polygon: {
        nb_sides: 10,
      },
      image: {
        src: 'https://uploads-ssl.webflow.com/64885b92cc3ed80088e8bcca/64885e7cbe47a3c245d241fb_Remax%20Icon%20webclip.png',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: true,
      },
    },
    size: {
      value: 15,
      random: true,
      anim: {
        enable: true,
        speed: 9.59040959040959,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#0b3696',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 35,
        duration: 2,
        opacity: 10,
        speed: 10,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
