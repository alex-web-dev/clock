import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Pagination]);

window.addEventListener('load', function() {
  const mySwiper = new Swiper('.swiper-container', {
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

  const menuToggles = document.querySelectorAll('.toggle-menu');
  
  menuToggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
      const menu = toggle.closest('.menu');
      menu.classList.toggle('menu_active');
    });
  });
});

//~1600px news