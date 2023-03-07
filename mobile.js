const mobileMenu = document.querySelector('.ic_menu');

const hamburguerIcon = document.querySelector('.fa-sharp');
const closeIcon = document.querySelector('.fa-xmark');

const menuIcon = document.querySelector('.menu-mobile');

mobileMenu.addEventListener('click', () => {
  hamburguerIcon.classList.toggle('hide');
  closeIcon.classList.toggle('show');
  menuIcon.classList.toggle('hide');
});

document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('#link1')) {
    menuIcon.classList.toggle('hide');
    hamburguerIcon.classList.remove('hide');
    closeIcon.classList.remove('show');
  }
  if (e.target.matches('#link2')) {
    menuIcon.classList.toggle('hide');
    hamburguerIcon.classList.remove('hide');
    closeIcon.classList.remove('show');
  }
  if (e.target.matches('#link3')) {
    menuIcon.classList.toggle('hide');
    hamburguerIcon.classList.remove('hide');
    closeIcon.classList.remove('show');
  }
  if (e.target.matches('#link4')) {
    menuIcon.classList.toggle('hide');
    hamburguerIcon.classList.remove('hide');
    closeIcon.classList.remove('show');
  }
});