import { animationSlide } from "./gasp.ts";

export const setupSwiper = () => {
  const defaultSetting = {
    loop: true,
    autoHeight: true,
    spaceBetween: 30,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },    
    autoplay: {
      delay: 5000,
    },
  }
  // new Swiper(".mySwiper", {
  //   ...defaultSetting,
  //   slidesPerView: 3,
  // });

  new Swiper(".mySwiper", {
    ...defaultSetting,
    navigation: false,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 3,
      slidesPerView: 3,
    },
    breakpoints: {
      1366: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 1,
      },
    },
  });

  new Swiper(".mySwiperContent", {
    ...defaultSetting,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
    on: {
      init: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
      slideChangeTransitionStart: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
    },
  });
}
