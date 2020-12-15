
/* Photos import */
import photo_1 from './img/1.jpg';
import photo_2 from './img/2.jpg';
import photo_3 from './img/3.jpg';
import photo_4 from './img/4.jpg';
import photo_5 from './img/5.jpg';
import photo_6 from './img/6.jpg';

const photo1 = new Image();
const photo2 = new Image();
const photo3 = new Image();
const photo4 = new Image();
const photo5 = new Image();
const photo6 = new Image();

photo1.src = photo_1;
photo2.src = photo_2;
photo3.src = photo_3;
photo4.src = photo_4;
photo5.src = photo_5;
photo6.src = photo_6;

/* Insert images into an array */
const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

/* Set up first photo number */
let startingPoint = 0;

/* Define render function */
function sliderRender() {
        /* Setting time interval for photo change */
        setInterval(() => {
            startingPoint++;
    
            if (startingPoint >= photos.length) startingPoint = 0;
        
            let mainSaidbar = document.querySelector('.mainSaidbar');
            mainSaidbar.innerHTML = '';
            mainSaidbar.appendChild(photos[startingPoint]);
           
    
        }, 1000);
}





export {sliderRender}