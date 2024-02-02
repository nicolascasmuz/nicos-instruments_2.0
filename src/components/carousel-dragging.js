const carouselEl = document.querySelector(".carousel");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carouselEl.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carouselEl.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = (e) => {
  isDragStart = false;
};

carouselEl.addEventListener("mousedown", dragStart);
carouselEl.addEventListener("mousemove", dragging);
carouselEl.addEventListener("mouseup", dragStop);
