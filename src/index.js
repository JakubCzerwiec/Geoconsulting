/* Import render functions */
import { renderStructure  } from './structure';
import {homeRender} from './home';
import {servicesRender} from './services';
import {aboutRender} from './about';
import {publicationsRender} from './publications';
import { photosI } from './photosImport';

/* Import stylesheet */
import './style.css';

// import { LibManifestPlugin } from 'webpack';
window['photosI'] = photosI;


/* Initialazing homepage with Nav-bar */
renderStructure ();







/* Event listeners */

const homeBtn = document.querySelector('.home');
const servicesBtn = document.querySelector('.services');
const aboutBtn = document.querySelector('.about');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const bBot = document.querySelector('.b-bot');
const pubList = document.querySelector('.pubList');

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    bBot.classList.toggle('b-bot-click')
} )


homeBtn.addEventListener('click', () => {
    bBot.classList.toggle('b-bot-click')
    menu.classList.toggle('hidden')
    homeRender();
});

servicesBtn.addEventListener('click', () => {
    bBot.classList.toggle('b-bot-click')
    menu.classList.toggle('hidden')
    servicesRender ();
});

aboutBtn.addEventListener('click', () => {
    bBot.classList.toggle('b-bot-click')
    menu.classList.toggle('hidden')
    aboutRender ();
});

pubList.addEventListener('click', () => {
    bBot.classList.toggle('b-bot-click')
    menu.classList.toggle('hidden')
    publicationsRender();
})