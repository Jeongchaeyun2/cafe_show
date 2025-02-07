const company_list = new Swiper(".company_list", {
  autoplay: {//자동재생
    delay: 3000,//3초
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".review-next", //다음
    prevEl: ".review-prev", //이전
  },

  breakpoints: {
    0: { //분기점 
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 2,

    },
    900: {
      slidesPerView: 3,

    },
    1130: {
      slidesPerView: 4,
    },
  },
});

