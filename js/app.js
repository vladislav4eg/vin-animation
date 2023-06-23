gsap.to ("#lightOne", {  opacity: 0.7});
gsap.to ("#lightTwo", {  opacity: 0.7});
gsap.from("#lightOne", {  duration: 2, rotate: 60, transformOrigin: "0% 100%", ease: "linear"});
gsap.from("#lightTwo", {  duration: 2, rotate: -60, transformOrigin: "0% 100%", ease: "linear"});

const lightTl = gsap.timeline({  });
lightTl
.to("#lightOne, #lightTwo", {opacity: 0.8, repeat: -1, yoyo: true})

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 1000 } },
    color: { value: "#ffeb8d" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
		shadow: {
			enable: true,
			color: "#ffeb8d",
			blur: 10
		},
    size: {
      value: 35,
      random: true,
      anim: { enable: true, speed: 15, size_min: 0, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.7,
      width: 2
    },
    move: {
      enable: true,
      speed: 7.8914764163227265,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "sparkle" },
      onclick: { enable: false, mode: "burst" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 }, duration: 0.8 },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
			repulse: { distance: 100, duration: 0.4 },
      remove: { particles_nb: 2 },
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);









