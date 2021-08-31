/* Defining render function for nav-bar */
import { renderStructure } from './structure'

let navRender = () => {
    const navigation = document.querySelector('navigation');
    



    // Co-name
    const coName = document.createElement('div');
    coName.className = 'coName';
    coName.textContent = 'MM Geoconsulting';

                                // Nav buttons and menu div
                                const menu = document.createElement('div');
                                menu.className = 'hidden menu';

                                    const li1 = document.createElement('div');
                                    li1.className = 'nav home';
                                    li1.textContent = 'Home';
                                    menu.appendChild(li1);

                                    const li2 = document.createElement('div');
                                    li2.className = 'nav services';
                                    li2.textContent = 'Services';
                                    menu.appendChild(li2);

                                    const li3 = document.createElement('div');
                                    li3.className = 'nav about';
                                    li3.textContent = 'About Me';
                                    menu.appendChild(li3);

                                    const li4 = document.createElement('div');
                                    li4.className = 'nav pubList';
                                    li4.textContent = 'Publication list';
                                    menu.appendChild(li4);


                        // Creating burger 
                        const burger = document.createElement('div');
                        burger.className = 'burger';
        
                        const burgerTop = document.createElement('div');
                        burgerTop.className = 'b-top';
                        const burgerBot = document.createElement('div');
                        burgerBot.className = 'b-bot b-bot-click';
        
                        burger.appendChild(burgerTop);
                        burger.appendChild(burgerBot);

    // Appending all to the navigation



    navigation.append(coName, burger, menu);

}


/* Export render function */
export {
    navRender
}