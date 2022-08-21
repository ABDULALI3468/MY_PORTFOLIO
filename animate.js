gsap.registerPlugin(ScrollTrigger);

gsap.to(".mypicture", {
  x: window.innerWidth,
  y: 0,
  duration: 10,
  yoyo: true,
  repeat: -1,
  ease: Linear.easeInOut,

  scrollTrigger: {
    markers: true,
    trigger: ".body",
    start: "top 100%",
    end: "bottom 100%",
    // toggleClass: "red",
  },
});

gsap.to(".mypicture", 1, { y: "+=20", yoyo: true, repeat: -1 });
gsap.to(".mypicture", 1, { y: "-=20", yoyo: true, repeat: -1 });
