// Set up base structure of the page
import {navRender} from './nav';
import {homeRender} from './home';
import { footerRender } from './footer';


let renderStructure = () => {

    const content = document.getElementById('content');

        const navig = document.createElement('navig')
           
        const main = document.createElement('main')

        const footer = document.createElement('footer')

    content.append(navig, main, footer);

    navRender()

    homeRender()

    footerRender()


}

export { renderStructure };
