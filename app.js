const rotation = document.querySelector(".section__content-button");
rotation.addEventListener('click', () => {
    if(rotation.classList.contains('perevertish')){
        rotation.classList.remove('perevertish')
    } else{
        rotation.classList.add('perevertish')
    }
    console.log(1)
})

let newSwiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 15,
  slidesPerView: "auto",
  breakpoints: {
    768: {
      enabled: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
const button = document.querySelector(".show-more");

const toggleButton = () => {
  const cards = document.querySelectorAll(".swiper-slide--config");
  cards.forEach((card) => {
    card.classList.toggle("swiper-slide--config--showed");
  });
  const hasModifier = button.classList.contains("show-more--hide");
  if (hasModifier) {
    button.textContent = "Скрыть";
  } else {
    button.textContent = "Показать все";
  }
  button.classList.toggle("show-more--hide");
};

button.addEventListener("click", toggleButton);
