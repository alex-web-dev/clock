import Swiper, { Navigation, Pagination } from 'swiper';

window.onload = function() {
  Swiper.use([Pagination]);
  console.log(document.querySelector('.swiper-container'));
  
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
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
  });
}