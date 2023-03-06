let eventMobile = document.querySelector('.ic_menu')

let target1 = document.querySelector('.fa-sharp')
let target2 = document.querySelector('.fa-xmark')

let modal = document.querySelector('.menu-mobile')

let helloMobile = document.getElementById('#link1')*/
/*let helloMobile = document.querySelector('.menu-mobile a')*/
let portfolioMobile = document.querySelector()

eventMobile.addEventListener('click', function(){ 
  target1.classList.toggle('hide')
  target2.classList.toggle('show')
  modal.classList.toggle('hide')
})

helloMobile.addEventListener('click', function(e){
  modal.classList.toggle('hide')
  console.log(e.target);
})