// Import footer
import { footerRender } from './footer';

// Define render function
    let publicationsRender = () => {
        window.scroll(0, 0)
        
        // Set up structure
            const main = document.querySelector('main');
            main.innerHTML = '';

            const pubText = document.createElement('div');
            pubText.className = 'pubText';

        // Filling the structure
        // Header 
            const header = document.createElement('h2');
            header.innerText = 'Publication list';
            

        // List of publications
                const publicationsList = document.createElement('ul');

                    const pub1 = document.createElement('li');
                    pub1.innerHTML = '<strong>Matysik, M.</strong>, Stachacz, M., Knaust, D. & Whitehouse, M.J. (2022) Geochemistry, ichnology, and sedimentology of omission levels in Middle Triassic (Muschelkalk) platform carbonates of the Germanic Basin (southern Poland). Palaeogeography, Palaeoclimatology, Palaeoecology, 585: 110732. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0031018221005174" target="blank">[click]</a>';

                    const pub2 = document.createElement('li');
                    pub2.innerHTML = 'Stachacz, M., Knaust, D. & <strong>Matysik, M.</strong> (2021) Middle Triassic bivalve traces from central Europe (Muschelkalk, Anisian): overlooked burrows of a common ichnofabric. PalZ. See: <a href="https://link.springer.com/content/pdf/10.1007/s12542-021-00583-6.pdf" target="blank">[click]</a>';

                    const pub3 = document.createElement('li');
                    pub3.innerHTML = '<strong>Matysik, M.</strong>, Stemmerik, L., Olaussen, S., Rameil, N., Gianotten, I. P. & Brunstad, H. (2021) Cherts, spiculites, and collapse breccias Porosity generation in upper Permian reservoir rocks, Gohta discovery, Loppa High, south-western Barents Sea. <i>Marine and Petroleum Geology</i>, 128: 105043. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S026481722100146X" target="blank">[click]</a>';

                    const pub4 = document.createElement('li');
                    pub4.innerHTML = 'Bucur, I. I. & <strong>Matysik, M.</strong> (2020) Dasycladalean green algae and associated foraminifers in Middle Triassic (Lower and Middle Muschelkalk) carbonates of the south-eastern Germanic Basin (Upper Silesia, Poland). <i>Annales Societatis Geologorum Poloniae</i>, 90: 391-407. See: <a href="http://www.asgp.pl/sites/default/files/volumes/90_4_391_407_Bucur_Matysik.pdf" target="blank">[click]</a>';

                    const pub5 = document.createElement('li');
                    pub5.innerHTML = 'Antczak, M., Ruciński, M. R., Stachacz, M., <strong>Matysik, M.</strong> & Król, J. J. (2020) Diversity of vertebrate remains from the Lower Gogolin Beds (Anisian) of southern Poland. <i>Annales Societatis Geologorum Poloniae.</i> Free full text available at: <a href="http://www.asgp.pl/sites/default/files/volumes/90_4_419_433_Antczak_et_al.pdfMo" target="blank">[click]</a>;'

                    const pub6 = document.createElement('li');
                    pub6.innerHTML = 'Stachacz, M. & <strong>Matysik, M.</strong> (2020) Early Middle Triassic (Anisian) trace fossils, ichnofabrics, and substrate types from the southeastern Germanic Basin (Wellenkalk facies) of Upper Silesia, southern Poland: implications for biotic recovery following the Permian/Triassic mass extinction. <i>Global and Planetary Change</i>, 194: 103290. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0921818120301818?dgcid=rss_sd_all" target="blank">[click]</a>';

                    const pub7 = document.createElement('li');
                    pub7.innerHTML = '<strong>Matysik, M.</strong> & Szulc, J. (2019) Shallow-marine carbonate sedimentation in a tectonically mobile basin, the Muschelkalk (Middle Triassic) of Upper Silesia (southern Poland). <i>Marine and Petroleum Geology</i>, 107: 99–115.  See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0264817219302211" target="blank">[click]</a>';

                    const pub8 = document.createElement('li');
                    pub8.innerHTML = '<strong>Matysik, M.</strong> (2019) High-frequency depositional cycles in the Muschelkalk (Middle Triassic) of southern Poland: Origin and implications for Germanic Basin astrochronological scales. <i>Sedimentary Geology</i>, 383: 159–180. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0037073819300338" target="blank">[click]</a>';

                    const pub9 = document.createElement('li');
                    pub9.innerHTML = 'Jewuła, K., <strong>Matysik, M.</strong>, Paszkowski, M. & Szulc, J. (2019) The Late Triassic development of playa–gilgai environments from Upper Silesia, southern Poland. <i>Sedimentary Geology</i>, 379: 25–45.  Free full text available at: <a href="https://www.krasiejow.pl/static/img/k01/The_late_Triassic_development_of_playa,_gilgai_floodplain,_and_fluvial_environments_from_Upper_Silesia...pdf" target="blank">[click]</a>';

                    const pub10 = document.createElement('li');
                    pub10.innerHTML = '<strong>Matysik, M.</strong>, Stemmerik, L., Olaussen, S. & Brunstad, H. (2017) Diagenesis of spiculites and carbonates in a Permian temperate ramp succession, Tempelfjorden Group, Spitsbergen, Arctic Norway. <i>Sedimentology</i>, 65: 745–774. See: <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/sed.12404" target="blank">[click]</a>';

                    const pub11 = document.createElement('li');
                    pub11.innerHTML = '<strong>Matysik, M.</strong> (2016) Facies types and depositional environments of a morphologically diverse carbonate platform: a case study from the Muschelkalk (Middle Triassic) of Upper Silesia, southern Poland. <i>Annales Societatis Geologorum Poloniae</i>, 86: 119–164. Free full text available at: <a href="https://geojournals.pgi.gov.pl/asgp/article/view/25483/0" target="blank">[click]</a>';

                    const pub12 = document.createElement('li');
                    pub12.innerHTML = '<strong>Matysik, M.</strong>, Al-Ramadan, K. & Riding, R. (2015) Composition and morphology of Early Devonian microbial and metazoan patch reefs: Qasr Member of the Jauf Formation, Northwestern Saudi Arabia. <i>Journal of Sedimentary Research</i>, 85: 45–61. See: <a href="https://pubs.geoscienceworld.org/jsedres/issue/85/1" target="blank">[click]</a>';

                    const pub13 = document.createElement('li');
                    pub13.innerHTML = '<strong>Matysik, M.</strong> (2014) Sedimentology of the "ore-bearing dolomite" of the Kraków-Silesia region (Middle Triassic, southern Poland). <i>Annales Societatis Geologorum Poloniae</i>, 84: 81–112. Free full text available at: <a href="http://www.asgp.pl/84_2_081_112" target="blank">[click]</a>';

                    const pub14 = document.createElement('li');
                    pub14.innerHTML = '<strong>Matysik, M.</strong> (2010) Reefal environments and sedimentary processes of the Anisian Karchowice Beds in Upper Silesia, southern Poland. <i>Annales Societatis Geologorum Poloniae</i>, 80: 123–145. Free full text available at: <a href="http://www.asgp.pl/80_2_123_145" target="blank">[click]</a>';

        
        // Appending
            publicationsList.append(pub1, pub2, pub3, pub4, pub5, pub6, pub7, pub8, pub9, pub10, pub11, pub12, pub13, pub14);
            main.append(header, pubText);
            pubText.append(publicationsList);

        // Adding classes to li
            addClassNameForPubsLi ();

        // Adding footer
        footerRender();

    }


// Function to add classes to li
    let addClassNameForPubsLi = () => {
        const listItemsAll = document.querySelectorAll('li');
        listItemsAll.forEach((x) => {
            x.classList.add('pubsLi')
        })
    }

// Export
    export {publicationsRender}