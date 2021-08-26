/* Defining render function for nav-bar */

let navRender = () => {
    const content = document.getElementById('content');
    

    /* Creating Navbar */
    const nav = document.createElement('nav');
    nav.classList = 'hidden navBar';

    // Creating top bar

    const topBar = document.createElement('div');
    topBar.className = 'topBar';
    content.appendChild(topBar);


    /* Creating burger */
    const burger = document.createElement('div');
    burger.className = 'burger';

    const burgerTop = document.createElement('div');
    burgerTop.className = 'b-top';
    const burgerBot = document.createElement('div');
    burgerBot.className = 'b-bot b-bot-click';

    burger.appendChild(burgerTop);
    burger.appendChild(burgerBot);

    /* Co-name */
    const coName = document.createElement('div');
    coName.className = 'coName';
    coName.textContent = 'MM Geoconsulting';

    /* Nav buttons */
    const navigation = document.createElement('div');
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

    const li4 = document.createElement('div');
    li4.className = 'nav pubList';
    li4.textContent = 'Publication list';
    navigation.appendChild(li4);


    /* Appending all to the content */
    topBar.appendChild(coName);
    topBar.appendChild(burger);
    content.appendChild(nav);
    nav.appendChild(navigation);

    const main = document.createElement('main');
    content.appendChild(main);
}


/* Export render function */
export {
    navRender
}