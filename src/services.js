import {sliderRender} from './slider';
import { footerRender } from './footer';



/* Defining render function for Services page */
let servicesRender = () => {
    
    const content = document.getElementById('content');

    /* Set up structure */
    const main = document.querySelector('main');
    content.appendChild(main);
    main.innerHTML = '';

    const mainText = document.createElement('div');
    mainText.className = 'mainText';
   

    const mainSaidbar = document.createElement('div');
    mainSaidbar.className = 'mainSaidbar';
    main.append(mainText, mainSaidbar);

    /* Filling the structure */
    /* Text */
    const header = document.createElement('h1');
    header.innerText = 'Services';

    const text = document.createElement('div');
    text.className = 'servicesDiv';

    mainText.append(header, text);


    /* Service 1 */
    const service1 = document.createElement('div');
    service1.className = 'service1';

    const service1header = document.createElement('h5');
    service1header.innerText = 'Sedimentology:';

    const service1list = document.createElement('ul');
    const list1item1 = document.createElement('li');
    list1item1.innerText = 'describing and interpreting depositional macro- and microfacies, key surfaces,';
    const list1item2 = document.createElement('li');
    list1item2.innerText = 'recognizing high-frequency sedimentary cycles, sequence stratigraphic units, and key surfaces,';
    const list1item3 = document.createElement('li');
    list1item3.innerText = 'describing and interpreting syndepositional deformation structures and tsunamites,';
    const list1item4 = document.createElement('li');
    list1item4.innerText = 'reconstructing depositional environments, platform geometries, and basin evolution and dynamics.';

    service1list.append(list1item1, list1item2, list1item3, list1item4);

    service1.append(service1header, service1list);

    /* Service 2 */
    const service2 = document.createElement('div');
    service2.className = ('service2');

    const service2header = document.createElement('h5');
    service2header.innerText = 'Diagenesis:';

    const service2list = document.createElement('ul');
    const list2item1 = document.createElement('li');
    list2item1.innerText = 'identifying diagenetic phases and events and their relative timing to establish post-depositional history of the strata,';
    const list2item2 = document.createElement('li');
    list2item2.innerText = 'establishing cement stratigraphy using petrographic and cathodoluminescence observations (the company is equipped with a petrographic microscope with a high-resolution camera and reflected light and CL stages),';
    const list2item3 = document.createElement('li');
    list2item3.innerText = 'establishing temperature and character of cement-forming fluids with oxygen and carbon isotope geochemistry using powder (bulk) and SIMS (in situ) methods (powder samples are analyzed in one of several laboratories in Europe, and thin sections are analyzed with SIMS in Stockholm).';

    service2list.append(list2item1, list2item2, list2item3);

    service2.append(service2header, service2list);


    /* Service 3 */
    const service3 = document.createElement('div');
    service3.className = ('service3')

    const service3header = document.createElement('h5');
    service3header.innerText = 'Reservoir properties:';

    const service3list = document.createElement('ul');
    const list3item1 = document.createElement('li');
    list3item1.innerText = 'characterizing pore types, morphology, and distribution as well as porosity enhancing and destructive processes,';
    const list3item2 = document.createElement('li');
    list3item2.innerText = 'integration of macroscopic and petrographic observations with petrophysical and well log data provided by the client,';
    const list3item3 = document.createElement('li');
    list3item3.innerText = 'assessing reservoir properties of individual facies or stratigraphic intervals.';

    service3list.append(list3item1, list3item2, list3item3);

    service3.append(service3header, service3list);

    text.append(service1, service2, service3);

    addClassNameForLi ()

    /* Slider */
    sliderRender();

    footerRender();


}

function addClassNameForLi () {
    const listItemsAll = document.getElementsByTagName('li');

        for (let i = 0; i < listItemsAll.length; i++) {
            listItemsAll[i].classList.add('servicesListItems');
        }
} 

export {servicesRender}