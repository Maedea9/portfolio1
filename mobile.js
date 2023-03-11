const projects = [
  {
    image: 'images/Rectangle21.png',
    name: 'Project 1',
    languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkdemo: 'https://maedea9.github.io/portfolio1/',
    github: 'https://github.com/Maedea9/portfolio1',
  },
  {
    image: 'images/Rectangle21v.png',
    name: 'Project 2',
    languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
   linkdemo: 'https://maedea9.github.io/portfolio1/',
    github: 'https://github.com/Maedea9/portfolio1',
  },
  {
    image: 'images/Rectangle21v2.png',
    name: 'Project 3',
    languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
   linkdemo: 'https://maedea9.github.io/portfolio1/',
    github: 'https://github.com/Maedea9/portfolio1',
  },
  {
    image: 'images/Rectangle21(1).png',
    name: 'Project 4',
    languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
   linkdemo: 'https://maedea9.github.io/portfolio1/',
    github: 'https://github.com/Maedea9/portfolio1',
  },
  {
    image: 'images/Rectangle21(2).png',
    name: 'Project 5',
    languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
   linkdemo: 'https://maedea9.github.io/portfolio1/',
    github: 'https://github.com/Maedea9/portfolio1',
  },
  {
    image: 'images/Rectangle21(3).png',
    name: 'Project 6',
    languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
   linkdemo: 'https://maedea9.github.io/portfolio1/',
    github: 'https://github.com/Maedea9/portfolio1',
  },
];

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
  if (e.target.matches('.see-project')) {
    const modalWindow = document.querySelector('.modal-window');
    modalWindow.style.display = 'block';
  }
  if (e.target.matches('.close-xbtn')) {
    const modalWindow = document.querySelector('.modal-window');
    modalWindow.style.display = 'none';
  }
});

/// // SEE-THIS-PROJECT///

// const seeThisProject = document.querySelector(".see-project");

function showModal() {
  const modalWindow = document.querySelector('.body');
  const worksHtml = `<div class="modal-window px-2">
<div class="pop-work-card">
<div class="pop-header p-0 d-flex flex-column flex-md-row-reverse w-100">
<button class="close-xbtn fa-solid fa-xmark align-self-end m-0"></button>
<div class="title m-0 p-0">${projects[0].name}</div>
</div>

    <div class="pop-tech-container m-0 mt-3">
    <ul class="ps-0 d-flex gap-1" >
    <li class="pop-language1 sm w-100">${projects[0].languages[0]}</li>
    <li class="pop-language2 sm w-100">${projects[0].languages[1]}</li>
    <li class="pop-language3 sm w-100">${projects[0].languages[2]}</li>
    </ul>
    </div>
    <img class="pop-img1 p-0 w-100" src=${projects[0].image} alt="">
    
      <div class="mx-0 modal-text-cont mt-4" >
        <p class="pop-text mx-auto p-0">${projects[0].description}</p>
  
        <div class="live-source-btns mx-auto"> 
          <a href=${projects[0].linkdemo} class="see-live">See Live</a>
          <a href=${projects[0].github} class="see-source">See Source</a>
          </div> 
      </div>
      
      <div class="pop-desktop-btns">
      <button class="previous-work"><i class="fa-solid fa-arrow-left"></i>Previous project</button>
      <button class="next-work">Next project<i class="fa-solid fa-arrow-right"></i></button>
      </div>
      </div>
      </div>`;
  modalWindow.innerHTML += worksHtml;
}

document.addEventListener('DOMContentLoaded', () => {
  showModal();
createprojects();
});

function createprojects() {
  for (let i = 0; i < projects.length; i += 1) {
    
}

/// ////FUNCTION TO SHOW MODAL/////////

const openModalBtn = document.querySelectorAll('.see-project');

openModalBtn.forEach((element) => {
  element.addEventListener('click', () => {
  });
});

seeThisProject.addEventListener("click", () => {
  //   // const body = document.querySelector(.body);
  //   const closeWorkCard = document.querySelector(".close-xbtn");
  //   const popUp = document.querySelector(".modal-window");
  //   closeWorkCard.addEventListener("click", () => {
  //     popUp.classList.toggle("hide");
  //     closeWorkCard.classList.toggle("show");
  //   });
  // });
  // for (let i = 0; i < 6; i += 1) {}
})