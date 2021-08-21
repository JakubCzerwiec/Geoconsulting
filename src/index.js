/* Import render functions */
import {navRender} from './nav';
import {homeRender} from './home';
import {servicesRender} from './services';
import {aboutRender} from './about';

/* Import stylesheet */
import './style.css';
// import { LibManifestPlugin } from 'webpack';



/* Initialazing homepage with Nav-bar */
navRender ();

homeRender ();


/* Event listeners */

const homeBtn = document.querySelector('.home');
const servicesBtn = document.querySelector('.services');
const aboutBtn = document.querySelector('.about');


homeBtn.addEventListener('click', () => {
    homeRender();
});

servicesBtn.addEventListener('click', () => {
    servicesRender ();
});

aboutBtn.addEventListener('click', () => {
    aboutRender ();
});

