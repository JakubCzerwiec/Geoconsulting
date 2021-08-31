/* Import render functions */
import {navRender} from './nav';
import {homeRender} from './home';
import {servicesRender} from './services';
import {aboutRender} from './about';
import {publicationsRender} from './publications';
import { photos } from './photosImport';

/* Import stylesheet */
import './style.css';

// import { LibManifestPlugin } from 'webpack';
window['photos'] = photos;


/* Initialazing homepage with Nav-bar */
navRender ();

homeRender ();






/* Event listeners */

const homeBtn = document.querySelector('.home');
const servicesBtn = document.querySelector('.services');
const aboutBtn = document.querySelector('.about');
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const bBot = document.querySelector('.b-bot');
const pubList = document.querySelector('.pubList');

burger.addEventListener('click', () => {
    nav.classList.toggle('hidden')
    bBot.classList.toggle('b-bot-click')
} )


homeBtn.addEventListener('click', () => {
    bBot.classList.toggle('b-bot-click')
    nav.classList.toggle('hidden')
    homeRender();
});

servicesBtn.addEventListener('click', () => {
    bBot.classList.toggle('b-bot-click')
    nav.classList.toggle('hidden')
    servicesRender ();
});

aboutBtn.addEventListener('click', () => {
    bBot.classList.toggle('b-bot-click')
    nav.classList.toggle('hidden')
    aboutRender ();
});

pubList.addEventListener('click', () => {
    bBot.classList.toggle('b-bot-click')
    nav.classList.toggle('hidden')
    publicationsRender();
})

