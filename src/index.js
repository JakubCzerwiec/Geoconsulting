import {navRender} from './nav';
import {homeRender} from './home';
import {servicesRender} from './services';
import {aboutRender} from './about';
import {publicationsRender} from './publications';
import {sliderRender} from './slider';

import './style.css';
// import { LibManifestPlugin } from 'webpack';



navRender ();

homeRender ();


/* Event listeners */

const main = document.querySelector('main');
const homeBtn = document.querySelector('.nav-home');
const servicesBtn = document.querySelector('.nav-services');
const aboutBtn = document.querySelector('.nav-about');



homeBtn.addEventListener('click', () => {
    homeRender();
    clearInterval(sliderRender);
});


servicesBtn.addEventListener('click', () => {
    servicesRender ();
});

aboutBtn.addEventListener('click', () => {
    aboutRender ();
    
})