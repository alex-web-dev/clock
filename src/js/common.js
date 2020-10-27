import Swiper, { Navigation, Pagination } from 'swiper';
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

  const menuToggles = document.querySelectorAll('.toggle-menu');
  
  menuToggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
      const menu = toggle.closest('.menu');
      menu.classList.toggle('menu_active');
    });
  });

  const $searchToggle = document.querySelector('.header__search-toggle');
  $searchToggle.addEventListener('click', function() {
    const $searchParent = $searchToggle.closest('.header__search');
    console.log($searchParent);

    $searchParent.classList.toggle('header__search_active');
  });
  
});