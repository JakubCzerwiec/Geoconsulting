

// Import Slider data
    import { photos } from './photosImport';
    import { sliderRender } from './slider';
    import { picDescription } from './descriptionsForPics'; 


    // Defining render function for Main page
        let homeRender = () => {

            window.scroll(0, 0)
        
            // Set up structure
                const main = document.querySelector('main');
                main.innerHTML = '';
            

            // Filling the structure
            // Text
                const header = document.createElement('h2');
                header.innerText = 'Company profile';

                main.appendChild(header);

            // Inserting Slider
                


            // Home text
                const text = document.createElement('p');
                text.className = 'homeText';
                    text.innerHTML = `<strong>Michał Matysik Geconsulting</strong> is a one-person consulting company providing a wide spectrum of sedimentological services in carbonate and mixed carbonate-evaporitic-siliciclastic-siliceous systems and reservoirs. To best solve client problems, the company can work on different types of materials (outcrops, drill cores, side-wall cores, cuttings, thin sections) and datasets (stable isotope, cathodoluminescence, X-ray diffraction, X-ray fluorescence, scanning electron microscopy, total organic carbon, well log, and porosity-permeability plug data). All projects are held in the strictest confidence and are completed to a high standard with a rich photographic documentation (see example of <a class='pdfLink' href="./pdf/2.pdf" download target="blank">sedimentary log</a> and <a class='pdfLink' href="./pdf/Example of detailed thin section description (by courtesy of Lundin Energy AS).pdf" download target="blank">detailed thin section description sheet</a>).`;
                
        // Appending        
            main.appendChild(text);

            picDescription = picDescriptions.slice(0, 14);
            photos = photosI.slice(0, 14);
            sliderRender();


        }

    // Export render function
    export { homeRender }