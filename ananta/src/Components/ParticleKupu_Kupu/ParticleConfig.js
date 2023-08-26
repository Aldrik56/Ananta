export const ParticleConfig = {
  particles: {
    number: {
      value: 5,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "image",
      image: [
        {
          src: "https://cdn.discordapp.com/attachments/1133328017410764891/1144940526639001652/kupu_3.png",
          width: 100,
          height: 100,
        },
        {
          src: "https://cdn.discordapp.com/attachments/1133328017410764891/1144940527112945674/kupu_2.png",
          width: 100,
          height: 100,
        },
        {
          src: "https://cdn.discordapp.com/attachments/1133328017410764891/1144940527515607101/kupu_4.png",
          width: 100,
          height: 100,
        },
        {
          src: "https://cdn.discordapp.com/attachments/1133328017410764891/1144940527846948895/kupu_1.png",
          width: 100,
          height: 100,
        },
      ],
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 1,
        sync: false,
      },
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 30,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
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
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
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
  retina_detect: false,
};
