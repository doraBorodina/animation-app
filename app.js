function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

scrollToTopButton = document.getElementById("scroll-top");
anchorButton = document.getElementById("scroll-top-anchor");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if (isInViewport(anchorButton)) {
  scrollToTopButton.classList.add("remove");
}

window.addEventListener("scroll", () => {
  if (isInViewport(anchorButton)) {
    scrollToTopButton.classList.add("remove");
  } else {
    scrollToTopButton.classList.remove("remove");
  }
});
/*
  - bouncing button
  - flushing button
  - button with icon which on hover is turning into a button with text
  - anchor buttons (if a button is out of view port, another sticky button appeares in the left bottom)
  - items list triangle animation
  - counters
  - blocks stagged floating animation
  - block with image in the center and 4 side text blocks 
  - ability to add top/left/bottom/right floating animation to any element or group of elements
 */