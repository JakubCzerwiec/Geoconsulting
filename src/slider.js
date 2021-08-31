import { photos } from './photosImport';



/* Set up first photo number */

// photos();

/* Define render function */
function sliderRender() {


    let sliderBox = document.createElement('div');
    sliderBox.className = 'sliderBox';
    let slider = document.createElement('div');
    const backBtn = document.createElement('div');
    const forBtn = document.createElement('div');
    let circles = document.createElement('div');
    const main = document.querySelector('main')

    main.append(sliderBox)

    let counter = 0;

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

            sliderBox.append(slider, backBtn, forBtn, circles);




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