const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// const rotation = document.querySelector('.section__content-button');
// rotation.addEventListener('click', () => {
//   if (rotation.classList.contains('perevertish')) {
//     rotation.classList.remove('perevertish');
//   } else {
//     rotation.classList.add('perevertish');
//   }
//   console.log(1);
// });

let newSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 15,
  slidesPerView: 'auto',
  breakpoints: {
    768: {
      enabled: false,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
const button = document.querySelector('.show-more');

const headerBurgerBtn = document.querySelector('.main-btn--burger');
const mobileMenu = document.querySelector('.left-menu');
headerBurgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});
const closeMenuBtn = document.querySelector('.btn-close-menu');
closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

const requestBtn = document.querySelector('.btn--chat');
const popupOverlay = document.querySelector('.popup-overlay');
const popupFeedback = document.querySelector('.popup-feedback');
const popupOrder = document.querySelector('.popup-order');
const btnCall = document.querySelector('.btn--call');
const popupCloseBtn = document.querySelectorAll('.popup-close');
const callHeaderBtnEl = document.querySelector('.main-btn--call');
const chatHeaderBtnEl = document.querySelector('.main-btn--chat');

requestBtn.addEventListener('click', () => {
  popupOverlay.classList.add('active');
  popupFeedback.classList.add('active');
});

callHeaderBtnEl.addEventListener('click', () => {
  popupOverlay.classList.add('active');
  popupOrder.classList.add('active');
});

chatHeaderBtnEl.addEventListener('click', () => {
  popupOverlay.classList.add('active');
  popupFeedback.classList.add('active');
});

popupOverlay.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
  popupOrder.classList.remove('active');
});

btnCall.addEventListener('click', () => {
  popupOverlay.classList.add('active');
  popupOrder.classList.add('active');
});

popupCloseBtn.forEach((b) => {
  b.addEventListener('click', (e) => {
    e.target.closest('.popup').classList.remove('active');
    popupOverlay.classList.remove('active');
  });
});

const hideContainer = document.querySelectorAll('.hide');
hideContainer.forEach((c) => {
  const hideList = c.querySelector('.hidden-list');
  const hideBtn = c.querySelector('.show-more--hide');
  hideBtn.addEventListener('click', () => {
    hideList.classList.toggle('active');
    const hasModifier = hideBtn.classList.contains('show-more--hide');
    if (hasModifier) {
      hideBtn.textContent = 'Скрыть';
    } else {
      hideBtn.textContent = 'Показать все';
    }
    hideBtn.classList.toggle('show-more--hide');
  });
});
