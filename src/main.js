import './style.css'

const buttonMenu = document.querySelector('.btn-hamburguer')
const navMenu = document.querySelector('.nav-menu')
const iconHamburguer = document.querySelector('.icon-hamburguer')

buttonMenu.addEventListener('click', () => {
  if (navMenu.classList.contains('hidden')) {
    navMenu.classList.remove('hidden')
    navMenu.classList.add('flex')
    iconHamburguer.setAttribute('src', 'src/assets/images/icon-close.svg')
  } else {
    navMenu.classList.add('hidden')
    navMenu.classList.remove('flex')
    iconHamburguer.setAttribute('src', 'src/assets/images/icon-hamburger.svg')
  }

}) 
