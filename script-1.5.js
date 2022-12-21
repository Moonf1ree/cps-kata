const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 0,
      enabled: false,
    },
    1119: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
  },
});

let buttonExpandAll = document.querySelector(".button-expand");
let buttonHideAll = document.querySelector(".button-hide");
let swiperList = document.querySelector(".swiper");

buttonExpandAll.addEventListener("click", function () {
  buttonExpandAll.classList.add("button-hidden");
  swiperList.classList.add("swiper__block");
  buttonHideAll.classList.remove("button-hidden");
});
buttonHideAll.addEventListener("click", function () {
  buttonExpandAll.classList.remove("button-hidden");
  buttonHideAll.classList.add("button-hidden");
  swiperList.classList.remove("swiper__block");
});
