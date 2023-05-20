// image slide
const sliderWrapper = document.querySelector(".slider-wrapper");
const radioButtons = document.querySelectorAll(".radio-btn input");

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener("click", () => {
    // sliderWrapper.style.transform = `translateX(-${index * 400}px)`; // Adjust the translateX value based on the width of each slide
    removeActiveClass();
    sliderWrapper.children[index].classList.add("active");
  });
});

const removeActiveClass = () => {
  const activeItem = document.querySelector(".slider-item.active");
  if (activeItem) {
    activeItem.classList.remove("active");
  }
};
