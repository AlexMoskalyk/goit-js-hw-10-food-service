import data from "./menu.json";
import menuCardTemplate from "../templates/menu-card.hbs";


const container = document.querySelector('.js-menu')


const allCards = data.map((itemCard) => menuCardTemplate(itemCard)).join('');
console.log(allCards);


container.insertAdjacentHTML("beforeend", allCards)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeBtn = document.querySelector('#theme-switch-toggle');
const bodyColor = document.querySelector('body');

themeBtn.addEventListener('change', handleColorThemeChanger);

function handleColorThemeChanger(e) {
    
}