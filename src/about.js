
/* Photo import */
import Face from './img/face.jpg';
const facePhoto = new Image();
facePhoto.src = Face;


/* Define render function */

function aboutRender () {

    const content = document.getElementById('content');


    /* Set up structure */
    const main = document.querySelector('main');
    main.innerHTML = '';
    content.appendChild(main);

    const mainText = document.createElement('div');
    mainText.className = 'mainText';
    
    const mainSaidbar = document.createElement('div');
    mainSaidbar.className = ('mainSaidbar');

    main.append(mainText, mainSaidbar);


    /* Filling the structure */
    /* Text */
    const header = document.createElement('h1');
    header.innerText = 'About me';
    

    const text = document.createElement('p');
    text.innerText = 'My name is Michał Matysik. I have a 13-year experience in Paleozoic and Mesozoic tropical- and cool-water carbonates, evaporites, mixed carbonate-siliciclastic systems, and siliceous deposits, gained during my Ph.D. research, four postdoc projects, and current geoconsulting and academic works focused on the Barents Sea, continental Europe, and the Middle East. Not only these different projects gave me an opportunity to work with a broad range of depositional facies and environments (sabkhas, tidal flats, lagoons, high-energy shoals, warm- to cool-water reefs, open-platform storm-dominated settings), diagenetic processes (dissolution, karstification, silicification, various dolomitization models), reservoir geometries (simple layer-cake successions to highly heterogeneous reservoirs hosted in tectonically tilted strata), and economic accumulations (hydrocarbons, MVT mineralization). They also developed my proficiency in planning and using proper methods to solve specific sedimentological problems. Part of the results has been published in high-impact peer-reviewed journals (see publication list on the right). By visiting areas of modern sedimentation along the Red Sea, Persian (Arabian) Gulf, Oman Gulf, and Jutland Peninsula, I have supplemented my theoretical knowledge about coastal carbonate-evaporitic and siliciclastic settings.';
    mainText.append(header, text);


    /* Saidbar */
    const profilePhoto = facePhoto;

    const publicationsList = document.createElement('div');
    publicationsList.className = 'publicationList';
    publicationsList.innerText = 'Publication list';
    mainSaidbar.append(profilePhoto, publicationsList);
}

export {aboutRender}