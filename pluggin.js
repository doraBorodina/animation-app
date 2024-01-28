/**
 * class: string
 * value: number
 * duration: number
 * onlyIntegers?: true
 */

const initCounters = (counters) => {
  if (!Array.isArray(counters)) {
    counters = [counters];
  }
  counters.forEach(({ id, value, duration, onlyIntegers }) => {
    gsap.to(`.counter-${id}`, {
      innerText: value,
      duration,
      snap: onlyIntegers && "innerText",
      scrollTrigger: `.counter-trigger-${id}`,
    });
  });
};

/**
 * class: string;
 * direction: 'top' | 'bottom' | 'left' | 'right';
 * offset: number;
 * duration: number;
 * delay?: number;
 * triggerClass?: string;
 * withOpacity?: booleam;
 * stagger?: number;
 * scrub?: boolean | number;
 */
const addFloating = (elements) => {
  if (!Array.isArray(elements)) {
    elements = [elements];
  }
  elements.forEach((element) => {
    const config = {
      duration: element.duration,
      scrollTrigger: {
        trigger: element.triggerClass,
        scrub: element.scrub,
        start: element.start,
        end: element.end ?? "center bottom",
      },
      delay: element.delay,
      opacity: element.withOpacity ? 0 : undefined,
      stagger: element.stagger,
    };

    switch (element.direction) {
      case "top": {
        gsap.from(element.class, {
          y: -element.offset,
          ...config,
        });
        break;
      }

      case "bottom": {
        gsap.from(element.class, {
          y: element.offset,
          ...config,
        });
        break;
      }

      case "left": {
        gsap.from(element.class, {
          x: -element.offset,
          ...config,
        });
        break;
      }

      case "right": {
        gsap.from(element.class, {
          x: element.offset,
          ...config,
        });
        break;
      }
    }
  });
};

/*function initScrollDirectionIndicator() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".sync-card",
    onUpdate: (self) => {
      if (self.direction === 1) {
        const cards = document.querySelectorAll(".sync-card");
        cards.forEach((card) => {
          card.classList.add("scrolling-down");
          card.classList.remove("scrolling-up");
        });
      } else {
        cards.forEach((card) => {
          card.classList.add("scrolling-up");
          card.classList.remove("scrolling-down");
        });
      }
    },
    onLeaveBack: () => {
      body.classList.remove("scrolling-up");
    },
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  initScrollDirectionIndicator();
});*/

const yoyoAnimation = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".four-block",
      start: "50% center",
      end: "90% center",
      markers: true,
      scrub: 2,
    },
  });

  tl.addLabel("text")
    .from(".side-block", { y: -300, duration: 5 })
    .from(".link", { y: 50, duration: 0.5 }, "-=1");
};

///////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);
initCounters({
  id: "products",
  value: 14,
  duration: 3,
  onlyIntegers: true,
});

const headerAnimationObjects = [
  {
    class: ".title",
    direction: "top",
    offset: 40,
    duration: 1,
    triggerClass: ".title",
    withOpacity: true,
    scrub: true,
  },
  {
    class: ".img-left",
    direction: "bottom",
    offset: 800,
    duration: 1,
    triggerClass: ".title",
    withOpacity: true,
    scrub: 2,
  },
  {
    class: ".img-right",
    direction: "bottom",
    offset: 800,
    duration: 1,
    triggerClass: ".title",
    withOpacity: true,
    scrub: true,
  },
];
const blocksAnimationObjects = [
  {
    class: ".top",
    direction: "top",
    offset: 100,
    duration: 1,
    triggerClass: ".top",
    scrub: true,
    start: "10% 70%",
    end: "+=60%",
    withOpacity: true,
  },
  {
    class: ".bottom",
    direction: "bottom",
    offset: 100,
    duration: 1,
    triggerClass: ".bottom",
    scrub: true,
    start: "10% 70%",
    end: "+=60%",
    withOpacity: true,
  },
  {
    class: ".left",
    direction: "left",
    offset: 300,
    duration: 3,
    triggerClass: ".left",
    scrub: true,
    start: "10% 70%",
    end: "+=60%",
    withOpacity: true,
  },
  {
    class: ".right",
    direction: "right",
    offset: 300,
    duration: 3,
    triggerClass: ".right",
    scrub: true,
    start: "10% 70%",
    end: "+=60%",
    withOpacity: true,
  },
  {
    class: ".diagonal",
    direction: "left",
    offset: 100,
    duration: 3,
    triggerClass: ".diagonal",
    scrub: true,
    start: "10% 70%",
    end: "+=60%",
  },
  {
    class: ".diagonal",
    direction: "top",
    offset: 100,
    duration: 3,
    triggerClass: ".diagonal",
    scrub: true,
    start: "10% 70%",
    end: "+=60%",
    withOpacity: true,
  },
];
const fourBlocks = [
  {
    class: ".center",
    direction: "bottom",
    offset: -300,
    duration: 1,
    triggerClass: ".four-block",
    withOpacity: true,
  },
];
yoyoAnimation();

const directions = ["left", "top", "right", "bottom"];
const asyncCards = directions.map((dir) => {
  return {
    class: `.card-${dir}`,
    direction: dir,
    offset: 200,
    duration: 1,
    triggerClass: `.async-cards`,
    withOpacity: true,
    scrub: true,
    start: "10% center",
    end: "+=30%",
  };
});

const syncCards = [
  {
    class: ".sync-card",
    direction: "top",
    offset: 100,
    duration: 1,
    triggerClass: ".sync-cards",
    withOpacity: true,
    stagger: 0.25,
    scrub: true,
    start: "10% 70%",
    end: "+=60%",
  },
  {
    class: ".sync-card div",
    direction: "top",
    offset: 100,
    duration: 1,
    delay: 1,
    triggerClass: ".sync-cards",
    withOpacity: true,
    stagger: 0.25,
  },
  {
    class: ".sync-card h1",
    direction: "top",
    offset: 100,
    duration: 1,
    delay: 1,
    triggerClass: ".sync-cards",
    withOpacity: true,
    stagger: 0.25,
  },
];

addFloating([
  ...headerAnimationObjects,
  ...blocksAnimationObjects,
  ...fourBlocks,
  ...asyncCards,
  ...syncCards,
]);

///////////////////////

gsap.from(".list-stager-item", {
  duration: 2,
  x: (i) => {
    return 80 - 2 * Math.abs(5 - i) ** 2;
  },
  opacity: 0.5,
  scrollTrigger: {
    trigger: ".block-list-stager",
    toggleActions: "restart none none none",
  },
});

gsap.from(".list-item", {
  duration: 2,
  y: (i) => 10 * i,
  opacity: 0,
  scrollTrigger: {
    trigger: ".block-list",
    start: "top-=100 center",
    end: "bottom+=200 center",
    scrub: 2,
  },
});

////////////////////////

gsap.to(".bouncing", {
  duration: 0.5,
  y: 30,
  repeat: -1,
  yoyo: true,
});

////////////////////////////
