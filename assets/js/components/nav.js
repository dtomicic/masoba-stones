var hamburger = document.getElementById('menuBtn');
var bar = document.getElementsByClassName('navigation__menuBtnBar');
var popUp = document.getElementsByClassName('navigation__popUpMenu');


hamburger.addEventListener('click', function(){
  document.querySelectorAll('.navigation__menuBtnBar').forEach(element => {
    element.classList.toggle('transform');
  })
  document.querySelectorAll('.navigation__popUpMenu').forEach(item => {
    item.classList.toggle('shown');
  })
})
