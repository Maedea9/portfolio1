let eventMobile = document.querySelector('.ic_menu')

let target1 = document.querySelector('.fa-sharp')
console.log(target1);
let target2 = document.querySelector('.fa-xmark')
console.log(target2);

eventMobile.addEventListener('click', function(){ 
  target1.classList.toggle('hide')
  target2.classList.toggle('show')
})