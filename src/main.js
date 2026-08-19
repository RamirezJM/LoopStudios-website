import './style.css'
import iconHamburger from './assets/images/icon-hamburger.svg'
import iconClose from './assets/images/icon-close.svg'


const buttonMenu = document.querySelector('.btn-menu')
const navMenu = document.querySelector('.nav-menu')
const iconMenu = document.querySelector('.icon-menu')

buttonMenu.addEventListener('click', () => {
  if (navMenu.classList.contains('hidden')) {
    navMenu.classList.remove('hidden')
    navMenu.classList.add('flex')
    iconMenu.src = iconClose;
  } else {
    navMenu.classList.add('hidden')
    navMenu.classList.remove('flex')
    iconMenu.src = iconHamburger;
  }

}) 
