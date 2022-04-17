const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  freeMode: true,

  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,

  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const li = document.querySelectorAll(".navigation>ul>li>a");
li.forEach((v, i) => {
  v.addEventListener("click", (e) => {
    e.preventDefault();

    li.forEach((v) => {
      v.classList.remove("selected");
      v.parentElement.classList.remove("selected");
    }); //초기화

    v.classList.add("selected");
    v.parentElement.classList.add("selected");
    swiper.slideTo(v.dataset.index);
  });
});
console.log(li);
