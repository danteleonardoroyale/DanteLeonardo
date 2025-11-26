gsap.registerPlugin(ScrollTrigger);

gsap.from(".main-container", {
  scale: 1.45,
  duration: 2.8,
  ease: "power3.out",
});

gsap.to(".overlay", {
  opacity: 0,
  duration: 2.8,
  ease: "power3.out",
  onComplete: () => {
    document.body.style.overflow = "visible";
    document.body.style.overflowX = "hidden";
  },
});

const scrollIndicator = document.querySelector(".scroll-indicator");
const bounceTimeline = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

bounceTimeline.to(scrollIndicator, {
  y: 20,
  opacity: 0.6,
  duration: 0.8,
  ease: "power1.inOut",
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    scrub: 2,
    pin: true,
    start: "top top",
    end: "+=2000",
    ease: "none",
  },
});

tl.set(".main-container", {
  scale: 1.25,
});

tl.to(".main-container", {
  scale: 1,
  duration: 1,
});

tl.to(
  ".main-logo",
  {
    opacity: 0,
    duration: 0.5,
  },
  "<" 
);

tl.to(
  ".main-image",
  {
    opacity: 0,
    duration: 0.9,
  },
  "<+=0.5"
);

tl.to(
  ".main-container",
  {
    backgroundSize: "28vh",
    duration: 1.5,
  },
  "<+=0.2"
);

tl.fromTo(
  ".text",
  {
    backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(0, 49, 83, 1) 0vh,      
          rgba(0, 49, 83, 1) 90vh,     
          rgba(36, 33, 36, 1) 120vh,      
          rgba(36, 33, 36, 0) 150vh 
        )`,
  },
  {
    backgroundImage: `radial-gradient(circle at 50% 3.9575vh, 
          rgba(0, 49, 83, 1) 0vh,      
          rgba(0, 49, 83, 1) 90vh,     
          rgba(36, 33, 36, 1) 120vh,      
          rgba(36, 33, 36, 0) 150vh `,
    duration: 3,
  },
  "<1.2"
);

tl.fromTo(
  ".text-logo",

  {
    opacity: 0,
    maskImage: `radial-gradient(circle at 50% 145.835%, rgb(0, 0, 0) 36.11%, rgba(0, 0, 0, 0) 68.055%)`,
  },
  {
    opacity: 1,
    maskImage: `radial-gradient(
    circle at 50% 105.594%,
    rgb(0, 0, 0) 62.9372%,
    rgba(0, 0, 0, 0) 81.4686%
  )`,
    duration: 3,
  },
  "<0.2"
);

tl.set(".main-container", { opacity: 0 });

tl.to(".d1-container", { scale: 0.85, duration: 3 }, "<-=3");

tl.set(
  ".d1-container",
  {
    maskImage: `radial-gradient(circle at 50% 16.1137vh, rgb(0, 0, 0) 96.1949vh, rgba(0, 0, 0, 0) 112.065vh)`,
  },
  "<+=2.1"
);

tl.to(
  ".d1-container",
  {
    maskImage: `radial-gradient(circle at 50% -40vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 80vh)`,
    duration: 2,
  },
  "<+=0.2" 
);

tl.to(
  ".text-logo",
  {
    opacity: 0,
    duration: 2,
  },
  "<1.5"
);

tl.set(".d1-container", { opacity: 0 });
tl.set(".d2-container", { visibility: "visible" });

tl.to(".d2-container", { opacity: 1, duration: 3 }, "<+=0.2");

tl.fromTo(
  ".d2-container",
  {
    backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(0, 49, 83, 1) 0vh,      
          rgba(0, 49, 83, 1) 90vh,     
          rgba(36, 33, 36, 1) 120vh,      
          rgba(36, 33, 36, 0) 150vh  
        )`,
  },
  {
    backgroundImage: `radial-gradient(circle at 50% 3.9575vh, 
          rgba(0, 49, 83, 1) 0vh,      
          rgba(0, 49, 83, 1) 90vh,     
          rgba(36, 33, 36, 1) 120vh,      
          rgba(36, 33, 36, 0) 150vh `,
    duration: 3,
  },
  "<1.2"
);
