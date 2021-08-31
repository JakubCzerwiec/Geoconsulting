
/* Photo import */
import { footerRender } from './footer';
import Face from './img/face.jpg';
const facePhoto = new Image();
facePhoto.src = Face;
import {publicationsRender} from './publications';


/* Define render function */

function aboutRender () {

    window.scroll(0, 0)

    /* Set up structure */
    const main = document.querySelector('main');
    main.innerHTML = '';


    const mainText = document.createElement('div');
    mainText.className = 'mainText';
    


    main.append(mainText);


    /* Filling the structure */
        /* Text */
            const header = document.createElement('h1');
            header.innerText = 'About me';
            

            const text = document.createElement('p');
            text.className = 'aboutMe';
            text.innerText = 'My name is Michał Matysik. I have a 13-year experience in Paleozoic and Mesozoic tropical- and cool-water carbonates, evaporites, mixed carbonate-siliciclastic systems, and siliceous deposits, gained during my Ph.D. research, four postdoc projects, and current geoconsulting and academic works focused on the Barents Sea, continental Europe, and the Middle East. Not only these different projects gave me an opportunity to work with a broad range of depositional facies and environments (sabkhas, tidal flats, lagoons, high-energy shoals, warm- to cool-water reefs, open-platform storm-dominated settings), diagenetic processes (dissolution, karstification, silicification, various dolomitization models), reservoir geometries (simple layer-cake successions to highly heterogeneous reservoirs hosted in tectonically tilted strata), and economic accumulations (hydrocarbons, MVT mineralization). They also developed my proficiency in planning and using proper methods to solve specific sedimentological problems. Part of the results has been published in high-impact peer-reviewed journals (see publication list on the right). By visiting areas of modern sedimentation along the Red Sea, Persian (Arabian) Gulf, Oman Gulf, and Jutland Peninsula, I have supplemented my theoretical knowledge about coastal carbonate-evaporitic and siliciclastic settings.';
            
            mainText.append(header, text);


    // Profile photo
    const profilePhoto = facePhoto;
    profilePhoto.className = 'profilePhoto';

    const publicationsList = document.createElement('div');
    publicationsList.className = 'publicationList';
    publicationsList.innerText = 'Publication list';
    main.append(profilePhoto, publicationsList);

    const publicBtn = document.querySelector('.publicationList');
    publicBtn.addEventListener('click', () => {
        publicationsRender();
    })

    footerRender();
}

export {aboutRender}