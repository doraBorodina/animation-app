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
 */
const addFloating = (elements) => {
  if (!Array.isArray(elements)) {
    elements = [elements];
  }
  elements.forEach((element) => {
    const config = {
      duration: element.duration,
      scrollTrigger: element.triggerClass,
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
  },
  {
    class: ".img-left",
    direction: "bottom",
    offset: 800,
    duration: 1,
    triggerClass: ".title",
    withOpacity: true,
  },

  {
    class: ".img-right",
    direction: "bottom",
    offset: 800,
    duration: 1,
    triggerClass: ".title",
    withOpacity: true,
  },
];
const blocksAnimationObjects = [
  {
    class: ".top",
    direction: "top",
    offset: 100,
    duration: 1,
    triggerClass: ".top",
  },
  {
    class: ".bottom",
    direction: "bottom",
    offset: 100,
    duration: 1,
    triggerClass: ".bottom",
  },
  {
    class: ".left",
    direction: "left",
    offset: 300,
    duration: 3,
    triggerClass: ".left",
  },
  {
    class: ".right",
    direction: "right",
    offset: 300,
    duration: 3,
    triggerClass: ".right",
  },
  {
    class: ".diagonal",
    direction: "left",
    offset: 100,
    duration: 3,
    triggerClass: ".diagonal",
  },
  {
    class: ".diagonal",
    direction: "top",
    offset: 100,
    duration: 3,
    triggerClass: ".diagonal",
  },
];
const fourBlocks = [
  {
    class: ".side-block",
    direction: "top",
    offset: 300,
    duration: 2,
    triggerClass: ".side-block",
    withOpacity: true,
  },
  {
    class: ".center",
    direction: "bottom",
    offset: 300,
    duration: 1,
    triggerClass: ".center",
    withOpacity: true,
  },
  {
    class: ".link",
    direction: "bottom",
    offset: 50,
    duration: 0.5,
    delay: 1,
    triggerClass: ".center",
    withOpacity: true,
  },
];
const directions = ["left", "top", "right", "bottom"];
const asyncCards = directions.map((dir) => {
  return {
    class: `.card-${dir}`,
    direction: dir,
    offset: 200,
    duration: 1,
    triggerClass: `.card-${dir}`,
    withOpacity: true,
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
  duration: 3,
  x: (i) => 50 + 80 * (5 - Math.abs(5 - i)),
  scrollTrigger: ".block-list-stager",
});
gsap.from(".list-item", {
  duration: 2,
  y: (i) => 10 * i,
  opacity: 0,
  scrollTrigger: ".block-list",
});

////////////////////////

gsap.to(".bouncing", {
  duration: 0.5,
  y: 30,
  repeat: -1,
  yoyo: true,
});

////////////////////////////
