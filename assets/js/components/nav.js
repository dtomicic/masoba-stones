const hamburger = document.getElementById('menuBtn');
const bar = document.getElementsByClassName('navigation__menuBtnBar');
const popUp = document.getElementsByClassName('navigation__popUpMenu');
const body = document.body;


hamburger.addEventListener('click', () =>{
  document.querySelectorAll('.navigation__menuBtnBar').forEach(element => {
    element.classList.toggle('transform');
  })
  document.querySelectorAll('.navigation__popUpMenu').forEach(item => {
    item.classList.toggle('shown');
  })
  body.classList.toggle('noscroll');
})
