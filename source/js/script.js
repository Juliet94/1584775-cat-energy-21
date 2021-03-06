const mainMenu = document.querySelector('.page-header');
const buttonToggle = document.querySelector('.page-header__toggle');
const menuList = document.querySelector('.header-nav');

mainMenu.classList.remove('page-header--menu-nojs');
mainMenu.classList.add('page-header--menu-closed');
menuList.classList.add('header-nav--menu-closed');

buttonToggle.addEventListener('click', function () {
  mainMenu.classList.toggle('page-header--menu-closed');
  mainMenu.classList.toggle('page-header--menu-open');
  menuList.classList.toggle('header-nav--menu-closed');
})
