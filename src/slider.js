
/* Photos import */
import photo_1 from './img/1.jpg';
import photo_2 from './img/2.jpg';
import photo_3 from './img/3.jpg';
import photo_4 from './img/4.jpg';
import photo_5 from './img/5.jpg';
import photo_6 from './img/6.jpg';
import photo_7 from './img/7.jpg';
import photo_8 from './img/8.jpg';
import photo_9 from './img/9.jpg';
import photo_10 from './img/10.jpg';
import photo_11 from './img/11.jpg';
import photo_12 from './img/12.jpg';
import photo_13 from './img/13.jpg';
import photo_14 from './img/14.jpg';
import photo_15 from './img/15.jpg';
import photo_16 from './img/16.jpg';
import photo_17 from './img/17.jpg';
import photo_18 from './img/18.jpg';
import photo_19 from './img/19.jpg';
import photo_20 from './img/20.jpg';
import photo_21 from './img/21.jpg';
import photo_22 from './img/22.jpg';
import photo_23 from './img/23.jpg';
import photo_24 from './img/24.jpg';
import photo_25 from './img/25.jpg';
import photo_26 from './img/26.jpg';
import photo_27 from './img/27.jpg';

const photo1 = new Image();
const photo2 = new Image();
const photo3 = new Image();
const photo4 = new Image();
const photo5 = new Image();
const photo6 = new Image();
const photo7 = new Image();
const photo8 = new Image();
const photo9 = new Image();
const photo10 = new Image();
const photo11 = new Image();
const photo12 = new Image();
const photo13 = new Image();
const photo14 = new Image();
const photo15 = new Image();
const photo16 = new Image();
const photo17 = new Image();
const photo18 = new Image();
const photo19 = new Image();
const photo20 = new Image();
const photo21 = new Image();
const photo22 = new Image();
const photo23 = new Image();
const photo24 = new Image();
const photo25 = new Image();
const photo26 = new Image();
const photo27 = new Image();

photo1.src = photo_1;
photo2.src = photo_2;
photo3.src = photo_3;
photo4.src = photo_4;
photo5.src = photo_5;
photo6.src = photo_6;
photo7.src = photo_7;
photo8.src = photo_8;
photo9.src = photo_9;
photo10.src = photo_10;
photo11.src = photo_11;
photo12.src = photo_12;
photo13.src = photo_13;
photo14.src = photo_14;
photo15.src = photo_15;
photo16.src = photo_16;
photo17.src = photo_17;
photo18.src = photo_18;
photo19.src = photo_19;
photo20.src = photo_20;
photo21.src = photo_21;
photo22.src = photo_22;
photo23.src = photo_23;
photo24.src = photo_24;
photo25.src = photo_25;
photo26.src = photo_26;
photo27.src = photo_27;



/* Insert images into an array */
let photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22, photo23, photo24, photo25, photo26, photo27];




/* Set up first photo number */
let counter = 0;


/* Define render function */
function sliderRender() {

    let mainSaidbar = document.querySelector('.mainSaidbar');
    let slider = document.createElement('div');
    const backBtn = document.createElement('div');
    const forBtn = document.createElement('div');
    let circles = document.createElement('div');

    let render = () => {
        // Define DOM elements
            // Slider 
            
            slider.className = 'slider';
            slider.innerHTML = '';
            circles.innerHTML = '';
            slider.appendChild(photos[counter]);
            

            // Back and For buttons
            
            backBtn.className = 'backBtn';
            backBtn.innerText = '<';

            forBtn.className = 'froBtn';
            forBtn.innerText = '>';

            // Navigation circles
            
            circles.className = 'circles';
            circles.innerHTML = '';

            // Creating circles
            for (let i = 0; i < photos.length; i++) {
                let circle = document.createElement('div');
                circle.className = 'circle';
                circles.appendChild(circle);
            }



            // Event listeners for nav circles
                let navCircles = document.querySelectorAll('.circle');
                navCircles.forEach((element, index) => {
                    element.addEventListener('click', () => {
                        counter = index;
                        render ();
                    })
                });

            // Changing class for active circle
            circles.childNodes[counter].className = 'circAct';

    }

        render ();

            mainSaidbar.append(slider, backBtn, forBtn, circles);




                        // Event listeners for Back nad For Btns
                        backBtn.addEventListener('click', () => {
                            counter--;
                            if (counter < 0) counter = photos.length - 1;
                            render();
                        })
            
                        forBtn.addEventListener('click', () => {
                            counter++;
                            if (counter > photos.length -1) counter = 0;
                            render();
                        })
            
                        



        // Setting time interval for photos change

        const nextSliderTimer = () => {
            counter++;
            if (counter >= photos.length) counter = 0;
            render();
        }

        const interval = setInterval(nextSliderTimer, 2000)
}






export {sliderRender}