gsap.to("#header", {
    backgroundColor: "#d6ffdd",
    duration: 0.5,
    height: "80px",
    
    scrollTrigger: {
      trigger: "#header",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });