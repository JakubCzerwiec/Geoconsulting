
/* Define render function */

function publicationsRender () {
    const content = document.getElementById('content');


    /* Set up structure */
    const main = document.createElement('main');
    content.appendChild(main);

    const mainText = document.createElement('div');
    mainText.className = 'mainText';

    main.appendChild(mainText);

    /* Filling the structure */
    /* Header */
    const header = document.createElement('h3');
    header.innerText = 'Publication list';

    /* List */
    const publicationsList = document.createElement('ul');

    const pub1 = document.createElement('li');
    pub1.innerHTML = '<strong>Matysik, M.</strong>, Stemmerik, L., Olaussen, S., Rameil, N., Gianotten, I. P. & Brunstad, H. (in review) Cherts, spiculites, and collapse breccias Porosity generation in upper Permian reservoir rocks, Gohta discovery, Loppa High, south-western Barents Sea. <i>Marine and Petroleum Geology</i>';

    const pub2 = document.createElement('li');
    pub2.innerHTML = 'Bucur, I. I. & <strong>Matysik, M.</strong> (accepted) Dasycladalean green algae and associated foraminifers in Middle Triassic (Lower and Middle Muschelkalk) carbonates of the south-eastern Germanic Basin (Upper Silesia, Poland). <i>Annales Societatis Geologorum Poloniae.</i>';

    const pub3 = document.createElement('li');
    pub3.innerHTML = 'Stachacz, M. & <strong>Matysik, M.</strong> (2020) Early Middle Triassic (Anisian) trace fossils, ichnofabrics, and substrate types from the southeastern Germanic Basin (Wellenkalk facies) of Upper Silesia, southern Poland: implications for biotic recovery following the Permian/Triassic mass extinction. <i>Global and Planetary Change</i>, 194: 103290';

    const pub4 = document.createElement('li');
    pub4.innerHTML = '<strong>Matysik, M.</strong> & Szulc, J. (2019) Shallow-marine carbonate sedimentation in a tectonically mobile basin, the Muschelkalk (Middle Triassic) of Upper Silesia (southern Poland). <i>Marine and Petroleum Geology</i>, 107: 99–115';

    const pub5 = document.createElement('li');
    pub5.innerHTML = '<strong>Matysik, M.</strong> (2019) High-frequency depositional cycles in the Muschelkalk (Middle Triassic) of southern Poland: Origin and implications for Germanic Basin astrochronological scales. <i>Sedimentary Geology</i>, 383: 159–180';

    const pub6 = document.createElement('li');
    pub6.innerHTML = 'Jewuła, K., <strong>Matysik, M.</strong>, Paszkowski, M. & Szulc, J. (2019) The Late Triassic development of playa–gilgai environments from Upper Silesia, southern Poland. <i>Sedimentary Geology</i>, 379: 25–45';

    const pub7 = document.createElement('li');
    pub7.innerHTML = '<strong>Matysik, M.</strong>, Stemmerik, L., Olaussen, S. & Brunstad, H. (2017) Diagenesis of spiculites and carbonates in a Permian temperate ramp succession, Tempelfjorden Group, Spitsbergen, Arctic Norway. <i>Sedimentology</i>, 65: 745–774';

    const pub8 = document.createElement('li');
    pub8.innerHTML = '<strong>Matysik, M.</strong> (2016) Facies types and depositional environments of a morphologically diverse carbonate platform: a case study from the Muschelkalk (Middle Triassic) of Upper Silesia, southern Poland. <i>Annales Societatis Geologorum Poloniae</i>, 86: 119–164';

    const pub9 = document.createElement('li');
    pub9.innerHTML = '<strong>Matysik, M.</strong>, Al-Ramadan, K. & Riding, R. (2015) Composition and morphology of Early Devonian microbial and metazoan patch reefs: Qasr Member of the Jauf Formation, Northwestern Saudi Arabia. <i>Journal of Sedimentary Research</i>, 85: 45–61';

    const pub10 = document.createElement('li');
    pub10.innerHTML = '<strong>Matysik, M.</strong> (2014) Sedimentology of the "ore-bearing dolomite" of the Kraków-Silesia region (Middle Triassic, southern Poland). <i>Annales Societatis Geologorum Poloniae</i>, 84: 81–112';

    const pub11 = document.createElement('li');
    pub11.innerHTML = '<strong>Matysik, M.</strong> (2010) Reefal environments and sedimentary processes of the Anisian Karchowice Beds in Upper Silesia, southern Poland. <i>Annales Societatis Geologorum Poloniae</i>, 80: 123–145';

    

    publicationsList.append(pub1, pub2, pub3, pub4, pub5, pub6, pub7, pub8, pub9, pub10, pub11);

    mainText.append(header, publicationsList);

    addClassNameForPubsLi ();



}

function addClassNameForPubsLi () {
    const listItemsAll = document.getElementsByTagName('li');

        for (let i = 0; i < listItemsAll.length; i++) {
            listItemsAll[i].classList.add('pubsLi');
        }
}


export {publicationsRender}