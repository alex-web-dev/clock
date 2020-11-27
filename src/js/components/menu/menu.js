window.addEventListener('load', function() {
  const menuToggles = document.querySelectorAll('.menu__toggle');
  
  menuToggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
      const menu = toggle.closest('.menu');
      menu.classList.toggle('menu_active');
    });
  });
});