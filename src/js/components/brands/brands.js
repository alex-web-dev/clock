import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);

window.addEventListener('load', function() {
  const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    speed: 600,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="swiper-dot ${className}"></span>`;
      },
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      890: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15
      },
    }
  });
});
