const projects = [{
  image: 'images/Rectangle21.png',
  name: 'Project name 1',
  languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  linkdemo: 'https://maedea9.github.io/portfolio1/',
  github: 'https://github.com/Maedea9/portfolio1',
},
{
  image: 'images/Rectangle21v.png',
  name: 'Project name 2',
  languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  linkdemo: 'https://maedea9.github.io/portfolio1/',
  github: 'https://github.com/Maedea9/portfolio1',
},
{
  image: 'images/Rectangle21v2.png',
  name: 'Project name',
  languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  linkdemo: 'https://maedea9.github.io/portfolio1/',
  github: 'https://github.com/Maedea9/portfolio1',
},
{
  image: 'images/Rectangle21(1).png',
  name: 'Project name',
  languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  linkdemo: 'https://maedea9.github.io/portfolio1/',
  github: 'https://github.com/Maedea9/portfolio1',
},
{
  image: 'images/Rectangle21(2).png',
  name: 'Project name',
  languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  linkdemo: 'https://maedea9.github.io/portfolio1/',
  github: 'https://github.com/Maedea9/portfolio1',
},
{
  image: 'images/Rectangle21(3).png',
  name: 'Project name',
  languages: ['Html/Css', 'Ruby on Rails', 'JavaScript'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  linkdemo: 'https://maedea9.github.io/portfolio1/',
  github: 'https://github.com/Maedea9/portfolio1',
},
];

function createmodal(n) {
  const i = n;

  const container = document.querySelector('.modal-container');

  let worksHtml = '';

  worksHtml += `<div class="modal-window px-2">
      <div class="pop-work-card">
        <div class="pop-header p-0 d-flex flex-column flex-md-row-reverse w-100">
          <button class="close-xbtn fa-solid fa-xmark align-self-end m-0"></button>
          <div class="title m-0 p-0">${projects[i].name}</div>
        </div>
        <div class="pop-tech-container m-0 mt-3">
          <ul class="ps-0 d-flex gap-1" >
            <li class="pop-language1 sm w-100">${projects[i].languages[0]}</li>
            <li class="pop-language2 sm w-100">${projects[i].languages[1]}</li>
            <li class="pop-language3 sm w-100">${projects[i].languages[2]}</li>
          </ul>
        </div>
        <img class="pop-img1 p-0 w-100" src=${projects[i].image} alt="">
        <div class="mx-0 modal-text-cont mt-4" >
          <p class="pop-text mx-auto p-0">${projects[i].description}</p>
          <div class="live-source-btns mx-auto"> 
            <a href=${projects[i].linkdemo} class="see-live">See Live</a>
            <a href=${projects[i].github} class="see-source">See Source</a>
          </div> 
        </div>
        <div class="pop-desktop-btns">
          <button class="previous-work"><i class="fa-solid fa-arrow-left"></i>Previous project</button>
          <button class="next-work">Next project<i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
  </div>`;
  container.innerHTML = worksHtml;
}

document.documentElement.addEventListener('click', (e) => {
  const hamburguerIcon = document.querySelector('.fa-sharp');
  const closeIcon = document.querySelector('.closed');
  const menuIcon = document.querySelector('.menu-mobile');

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
    const nboton = e.srcElement.getAttribute('data-id');
    createmodal(nboton);
    const modalWindow = document.querySelector('.modal-container');
    modalWindow.style.display = 'block';
  }
  if (e.target.matches('.close-xbtn')) {
    const modalWindow = document.querySelector('.modal-container');
    modalWindow.style.display = 'none';
  }
  if (e.target.matches('.ic_menu *')) {
    hamburguerIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
    menuIcon.classList.toggle('hide');
  }
});

// -------------------------------------------------create projects

const container = document.querySelector('.projects');

const gridArea1 = `
  <div class="grid-area1">
  <h2 id="project-title">Projects</h2>
  </div>
`;
container.innerHTML = gridArea1;

function createprojects() {
  for (let i = 0; i < projects.length; i += 1) {
    const cardTemplate = `
<img class="image1" src="${projects[i].image}" alt="project-1" width="100%">
<div class="work-description ">
  <h3> ${projects[i].name} </h3>
  <ul class="technology-container">
    <li class="item1"> ${projects[i].languages[0]} </li>
    <li class="item2"> ${projects[i].languages[1]} </li>
    <li class="item3"> ${projects[i].languages[2]} </li>
  </ul>
  <div class="item4">
    <button data-id=${i} class="see-project">See this project <i class="fa-solid fa-arrow-right"></i></button>
  </div>
</div>
`;

    const article = document.createElement('article');
    article.className = `works w${i}`;
    article.innerHTML = cardTemplate;
    container.appendChild(article);

    if (i === 1) {
      const desktopimg = document.createElement('div');
      desktopimg.className = 'desktop-geoma';
      container.appendChild(desktopimg);
    }

    if (i === 2) {
      const desktopimg1 = document.createElement('div');
      desktopimg1.className = 'desktop-geomc';
      container.appendChild(desktopimg1);
      const desktopimg2 = document.createElement('div');
      desktopimg2.className = 'desktop-geomd';
      container.appendChild(desktopimg2);
    }

    if (i === 4) {
      const desktopimg = document.createElement('div');
      desktopimg.className = 'desktop-geomb';
      container.appendChild(desktopimg);
    }
  }
}

/// // SEE-THIS-PROJECT///

document.addEventListener('DOMContentLoaded', () => {
  createprojects();
});
