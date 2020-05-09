$(".swiper-container.home").hover(
  function () {
    $(".swiper-button-next.home").css({
      visibility: "visible",
      opacity: "1",
    });
    $(".swiper-button-prev.home").css({
      visibility: "visible",
      opacity: "1",
    });
  },
  function () {
    $(".swiper-button-next.home").css({
      visibility: "hidden",
      opacity: "0",
      transition: "visibility 0s, opacity 0.45s",
    });
    $(".swiper-button-prev.home").css({
      visibility: "hidden",
      opacity: "0",
      transition: "visibility 0s, opacity 0.45s",
    });
  }
);

$(".swiper-modal-products-img").click(function (event) {
  $(".modal-products-img").attr("src", event.currentTarget.src);
});

new Swiper(".swiper-container.home", {
  spaceBetween: 30,
  fadeEffect: {
    crossFade: true,
  },
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next.home",
    prevEl: ".swiper-button-prev.home",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
new Swiper(".swiper-container.testimonial", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
new Swiper(".swiper-container.blog-latest", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-blog-arrow-right-img",
    prevEl: ".swiper-blog-arrow-left-img",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1,
    },
  },
});
new Swiper(".swiper-container.brands", {
  slidesPerView: 5,
  navigation: {
    nextEl: ".swiper-brands-arrow-right-img",
    prevEl: ".swiper-brands-arrow-left-img",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1,
    },
  },
});
new Swiper(".swiper-container.modal-products", {
  slidesPerView: 4,
  direction: "vertical",
  navigation: {
    nextEl: ".swiper-modal-products-arrow-up",
    prevEl: ".swiper-modal-products-arrow-down",
  },
});