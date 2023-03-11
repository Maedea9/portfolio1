document.documentElement.addEventListener("click", (e) => {
  const hamburguerIcon = document.querySelector(".fa-sharp");
  const closeIcon = document.querySelector(".closed");
  const menuIcon = document.querySelector(".menu-mobile");

  console.log(e.target)
  if (e.target.matches("#link1")) {
    menuIcon.classList.toggle("hide");
    hamburguerIcon.classList.remove("hide");
    closeIcon.classList.remove("show");
  }
  if (e.target.matches("#link2")) {
    menuIcon.classList.toggle("hide");
    hamburguerIcon.classList.remove("hide");
    closeIcon.classList.remove("show");
  }
  if (e.target.matches("#link3")) {
    menuIcon.classList.toggle("hide");
    hamburguerIcon.classList.remove("hide");
    closeIcon.classList.remove("show");
  }
  if (e.target.matches("#link4")) {
    menuIcon.classList.toggle("hide");
    hamburguerIcon.classList.remove("hide");
    closeIcon.classList.remove("show");
  }
  if (e.target.matches(".see-project")) {
    const modalWindow = document.querySelector(".modal-window");
    modalWindow.style.display = "block";
  }
  if (e.target.matches(".close-xbtn")) {
    const modalWindow = document.querySelector(".modal-window");
    modalWindow.style.display = "none";
  }
  if(e.target.matches('.ic_menu *')){    
    hamburguerIcon.classList.toggle("hide");
    closeIcon.classList.toggle("show");
    menuIcon.classList.toggle("hide");
  }

});

/// // SEE-THIS-PROJECT///

// const seeThisProject = document.querySelector(".see-project");

function showModal() {
  const modalWindow = document.querySelector(".body");
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

document.addEventListener("DOMContentLoaded", () => {
  showModal();  
});

// function createprojects() {
//   for (let i = 0; i < projects.length; i += 1) {}
//   const openModalBtn = document.querySelectorAll(".see-project");
//   openModalBtn.forEach((element) => {
//     element.addEventListener("click", () => {});
//   });
// }

// -------------------------------------------------create projects

// general variables

// card info

const projects = [
  {
    image: "images/Rectangle21.png",
    name: "Project 1",
    languages: ["Html/Css", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    linkdemo: "https://maedea9.github.io/portfolio1/",
    github: "https://github.com/Maedea9/portfolio1",
  },
  {
    image: "images/Rectangle21v.png",
    name: "Project 2",
    languages: ["Html/Css", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    linkdemo: "https://maedea9.github.io/portfolio1/",
    github: "https://github.com/Maedea9/portfolio1",
  },
  {
    image: "images/Rectangle21v2.png",
    name: "Project 3",
    languages: ["Html/Css", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    linkdemo: "https://maedea9.github.io/portfolio1/",
    github: "https://github.com/Maedea9/portfolio1",
  },
  {
    image: "images/Rectangle21(1).png",
    name: "Project 4",
    languages: ["Html/Css", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    linkdemo: "https://maedea9.github.io/portfolio1/",
    github: "https://github.com/Maedea9/portfolio1",
  },
  {
    image: "images/Rectangle21(2).png",
    name: "Project 5",
    languages: ["Html/Css", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    linkdemo: "https://maedea9.github.io/portfolio1/",
    github: "https://github.com/Maedea9/portfolio1",
  },
  {
    image: "images/Rectangle21(3).png",
    name: "Project 6",
    languages: ["Html/Css", "Ruby on Rails", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    linkdemo: "https://maedea9.github.io/portfolio1/",
    github: "https://github.com/Maedea9/portfolio1",
  },
];

// card template

// container
let container = document.querySelector(".projects");

let gridArea1 = `
  <div class="grid-area1">
  <h2 id="project-title">Projects</h2>
  </div>
`;
container.innerHTML = gridArea1;

function createprojects() {
  for (let i = 0; i < projects.length; i++) {
    let cardTemplate = `
<img class="image1" src="${projects[i].image}" alt="project-1" width="100%">
<div class="work-description ">
  <h3> ${projects[i].name} </h3>
  <ul class="technology-container">
    <li class="item1"> ${projects[i].languages[0]} </li>
    <li class="item2"> ${projects[i].languages[1]} </li>
    <li class="item3"> ${projects[i].languages[2]} </li>
  </ul>
  <div class="item4">
    <button class="see-project">See this project <i class="fa-solid fa-arrow-right"></i></button>
  </div>
</div>
`;

    let article = document.createElement("article");
    article.className = `works w${i}`;
    article.innerHTML = cardTemplate;
    container.appendChild(article);

    if (i == 1) {
      let desktopimg = document.createElement("div");
      desktopimg.className = `desktop-geoma`;
      container.appendChild(desktopimg);
    }

    if (i == 2) {
      let desktopimg1 = document.createElement("div");
      desktopimg1.className = `desktop-geomc`;
      container.appendChild(desktopimg1);
      let desktopimg2 = document.createElement("div");
      desktopimg2.className = `desktop-geomd`;      
      container.appendChild(desktopimg2);
    }

    if (i == 4) {
      let desktopimg = document.createElement("div");
      desktopimg.className = `desktop-geomb`;
      container.appendChild(desktopimg);
    }
  }
}

createprojects();
