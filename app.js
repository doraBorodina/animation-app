const registerPluggins = () => {
  gsap.registerPlugin(ScrollTrigger);
};

const headerAnimation = () => {
  TweenMax.from(".title", 1, {
    opacity: 0,
    delay: 1,
    y: 20,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".btn", 1, {
    opacity: 0,
    delay: 1.6,
    y: 20,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".img-left", 2, {
    opacity: 0,
    y: 800,
    duration: 10,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".img-right", 2, {
    opacity: 0,
    y: 800,
    duration: 3,
    ease: Expo.easeInOut,
  });
};

const cardsAnimation = () => {
  gsap.to(".cards h6", {
    bottom: "8px",
    duration: 1,
    scrollTrigger: ".cards h6",
  });

  gsap.to(".cards p", {
    bottom: "20px",
    duration: 1,
    scrollTrigger: ".cards h6",
  });

  gsap.to(".cards h3", {
    opacity: 1,
    "margin-bottom": "50px",
    duration: 3,
    delay: 0.5,
    scrollTrigger: ".item",
  });
};

const galleriesAnimation = () => {
  gsap.set(".dragger", { x: 270 / 2 });

  ["lavander", "banana"].map((color) => {
    document.getElementById(color).onmousemove = function (e) {
      const x = 270 - (e.pageX - e.currentTarget.offsetLeft); //x position within the element.
      gsap.set(`#${color} .clipped`, { clipPath: `inset(0px ${x}px 0px 0px)` });

      gsap.set(`#${color} .dragger`, { left: `${270 / 2 - x}px ` });
    };
  });

  gsap.to(".gallery h3", {
    opacity: 1,
    "margin-bottom": "50px",
    duration: 3,
    delay: 0.5,
    scrollTrigger: ".example",
  });
};

const statisticAnimation = () => {
  gsap.to(".stats img", {
    left: "10%",
    duration: 2.5,
    scrollTrigger: ".stats",
  });

  gsap.to(".stats section", {
    right: "10%",
    duration: 2.5,
    scrollTrigger: ".stats",
  });

  gsap.to("#count", {
    innerText: 43,
    duration: 2.5,
    snap: "innerText",
    scrollTrigger: ".stats",
  });
};

const footerAnimation = () => {
  gsap.to(".info", {
    opacity: 1,
    margin: "0px 120px",
    duration: 2,
    scrollTrigger: ".line",
  });

  gsap.to(".line", {
    width: "100%",
    duration: 3,
    scrollTrigger: "footer",
  });
};

const app = () => {
  registerPluggins();
  headerAnimation();
  cardsAnimation();
  galleriesAnimation();
  statisticAnimation();
  footerAnimation();
};

app();
