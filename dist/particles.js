"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 8,
        density: {
          enable: true,
          value_area: 1800
        }
      },
      color: {
        value: ["#dc1c2e", "#0b3696"]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "transparent"
        },
        polygon: {
          nb_sides: 3
        }
        // image: {
        //   src: 'img/github.svg',
        //   width: 100,
        //   height: 100,
        // },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: true
        }
      },
      size: {
        value: 19.728691040806815,
        random: true,
        anim: {
          enable: true,
          speed: 9.59040959040959,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 40,
          duration: 10,
          opacity: 8,
          speed: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
})();
//# sourceMappingURL=particles.js.map
