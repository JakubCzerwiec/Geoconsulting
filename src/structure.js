// Set up base structure of the page
import {navRender} from './nav';
import {homeRender} from './home';
import {servicesRender} from './services';
import {aboutRender} from './about';
import {publicationsRender} from './publications';
import { photos } from './photosImport';
import { footerRender } from './footer';


let renderStructure = () => {

    const content = document.getElementById('content');

        const navigation = document.createElement('navigation')
           
        const main = document.createElement('main')

        const footer = document.createElement('footer')

    content.append(navigation, main, footer);

    navRender()

    homeRender()

    footerRender()


}

export { renderStructure };
