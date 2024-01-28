function initScrollDirectionIndicator() {
  gsap.registerPlugin(ScrollTrigger);

  const body = document.querySelector("body");

  ScrollTrigger.create({
    trigger: body,
    onUpdate: (self) => {
      if (self.direction === 1) {
        body.classList.add("scrolling-down");
        body.classList.remove("scrolling-up");
      } else {
        body.classList.add("scrolling-up");
        body.classList.remove("scrolling-down");
      }
    },
    onLeaveBack: () => {
      body.classList.remove("scrolling-up");
    },
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  initScrollDirectionIndicator();
});
