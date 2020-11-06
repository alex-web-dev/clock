window.addEventListener('load', function() {
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

    $searchParent.classList.toggle('header__search_active');
  });
  
});