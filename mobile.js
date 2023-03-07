const eventMobile = document.querySelector('.ic_menu');

const target1 = document.querySelector('.fa-sharp');
const target2 = document.querySelector('.fa-xmark');

const modal = document.querySelector('.menu-mobile');

eventMobile.addEventListener('click', () => {
  target1.classList.toggle('hide');
  target2.classList.toggle('show');
  modal.classList.toggle('hide');
});

document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('#link1')) {
    modal.classList.toggle('hide');
  }
  if (e.target.matches('#link2')) {
    modal.classList.toggle('hide');
  }
  if (e.target.matches('#link3')) {
    modal.classList.toggle('hide');
  }
  if (e.target.matches('#link4')) {
    modal.classList.toggle('hide');
  }
});