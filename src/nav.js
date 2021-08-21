/* Defining render function for nav-bar */

function navRender () {
    const content = document.getElementById('content');
    

    /* Creating Navbar */
    const nav = document.createElement('nav');
    nav.classList = 'hidden';

    /* Creating burger */
    const burger = document.createElement('div');
    burger.className = 'burger';

    const burgerTop = document.createElement('div');
    burgerTop.className = 'b-top';
    const burgerBot = document.createElement('div');
    burgerBot.className = 'b-bot';

    burger.appendChild(burgerTop);
    burger.appendChild(burgerBot);

    /* Co-name */
    const coName = document.createElement('div');
    coName.className = 'coName';
    coName.textContent = 'MM Geoconsulting';

    /* Nav buttons */
    const navigation = document.createElement('nav');
    navigation.className = 'menu';

    const li1 = document.createElement('div');
    li1.className = 'nav home';
    li1.textContent = 'Home';
    navigation.appendChild(li1);

    const li2 = document.createElement('div');
    li2.className = 'nav services';
    li2.textContent = 'Services';
    navigation.appendChild(li2);

    const li3 = document.createElement('div');
    li3.className = 'nav about';
    li3.textContent = 'About Me';
    navigation.appendChild(li3);


    /* Appending all to the content */
    content.appendChild(burger);
    content.appendChild(coName);
    content.appendChild(nav);
    nav.appendChild(navigation);

    const main = document.createElement('main');
    content.appendChild(main);
}


/* Export render function */
export {
    navRender
}