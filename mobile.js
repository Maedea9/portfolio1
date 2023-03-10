const mobileMenu = document.querySelector('.ic_menu');

const hamburguerIcon = document.querySelector('.fa-sharp');
const closeIcon = document.querySelector('.closed');

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

///// SEE-THIS-PROJECT///

const seeThisProject = document.querySelector('.see-project');
const modalWindow = document.querySelector('.modal-window');

for(let i = 0; i < 6; i +=1) {
const worksHtml = `<div class="modal-window px-2">
  <div class="pop-work-card">
    <div class="pop-header p-0 d-flex flex-column flex-md-row-reverse w-100 hide">
      <button class="close-xbtn fa-solid fa-xmark align-self-end m-0"></button>
      <div class="title m-0 p-0">Project name goes here</div>
    </div>
  
    <div class="pop-tech-container m-0 mt-3">
      <ul class="ps-0 d-flex gap-3 " >
        <li class="pop-language1">Html/Css</li>
        <li class="pop-language2">Ruby on rails</li>
        <li class="pop-language3">JavaScript</li>
      </ul>
    </div>
    <img class="pop-img1 p-0 w-100" src="images/Group 109.svg" alt="">
  
      <div class="mx-0 modal-text-cont mt-4" >
        <p class="pop-text mx-auto p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </br> <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. 
        </p>
  
        <div class="live-source-btns mx-auto"> 
          <button class="see-live">
            See Live              
          </button>
          <button class="see-source">See source</button>
        </div> 
      </div>
  
      <div class="pop-desktop-btns">
      <button class="previous-work"><i class="fa-solid fa-arrow-left"></i>Previous project</button>
      <button class="next-work">Next project<i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
  </div>`;
   seeThisProject.addEventListener('click', () => {
   // const body = document.querySelector(.body);
    modalWindow.innerHTML = worksHtml;
    const closeWorkCard = document.querySelector('.close-xbtn');
    const popUp = document.querySelector('.modal-window');
    closeWorkCard.addEventListener('click', () => {
    popUp.classList.toggle('hide');
    closeWorkCard.classList.toggle('show');
    });
  });
 }
  