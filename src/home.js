
import { photos } from './photosImport';
import { sliderRender } from './slider';


/* Defining render function for Main page */
let homeRender = () => {

   
    window.scroll(0, 0)
   

    /* Set up structure */
    const main = document.querySelector('main');
    main.innerHTML = '';
    

    /* Filling the structure */
    /* Text */
    const header = document.createElement('h1');
    header.innerText = 'Company profile';

    main.appendChild(header);

    // Slider
        
        photos = photosI.slice(0, 10)
        sliderRender();

    // Home text
    const text = document.createElement('p');
    text.className = 'homeText';
    text.innerHTML = '<strong>Michał Matysik Geconsulting</strong> is a one-person consulting company providing a wide spectrum of sedimentological services in carbonate and mixed carbonate-evaporiticsiliciclastic-siliceous systems and reservoirs. To best solve client problems, the company can work on different types of materials (outcrops, drill cores, side-wall cores, cuttings, thin sections) and datasets (stable isotope, cathodoluminescence, X-ray diffraction, X-ray fluorescence, scanning electron microscopy, total organic carbon, well log, and porosity-permeability plug data). All projects are held in the strictest confidence and are completed to a high standard with a rich photographic documentation.';
    main.appendChild(text);


}

/* Export render function */
export {homeRender}