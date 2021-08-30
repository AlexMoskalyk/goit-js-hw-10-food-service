import data from "./menu.json";
import menuCardTemplate from "../templates/menu-card.hbs";


const container = document.querySelector('.js-menu')


const allCards = data.map((itemCard) => menuCardTemplate(itemCard)).join('');



container.insertAdjacentHTML("beforeend", allCards)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeBtn = document.querySelector('#theme-switch-toggle');
const bodyColor = document.querySelector('body');

themeBtn.addEventListener('change', handleColorThemeChanger);

function handleColorThemeChanger(e) {
    const themeColor = e.target.checked ? Theme.DARK : Theme.LIGHT;
    setData(themeColor)
    setBodyColor(themeColor)
}

function setData (data) {
localStorage.setItem('theme', data)
    
};

function setBodyColor(classColor) {
    bodyColor.className=classColor
}

function start() {
    const fistData = localStorage.getItem('theme') || Theme.LIGHT;
    setBodyColor(fistData);
    themeBtn.checked = fistData === Theme.DARK;
}

start();