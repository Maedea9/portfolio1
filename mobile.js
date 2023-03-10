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

const seeThisProject = document.querySelector('.see-project');
const modal-window = document.querySelector('.modal-window');
const worksHtml = `   `;

  
  for(let i = 0; i < 6; i +=1) {
   seeThisProject.addEventListener('click', () => {
  modal-window.innerHTML = worksHtml;
   const closeWorkCard = document.querySelector('.close-xbtn');
   const popUp = document.querySelector('.pop-work-card');
    closeWorkCard.addEventListener('click', () => {
    popUp.classList.toggle('hide');
    body.classList.toggle('show');
    });
  });
 }
  



