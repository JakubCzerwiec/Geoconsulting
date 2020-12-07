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
    coName.textContent = 'Michał Matysik Geoconsulting';

    /* Nav buttons */
    const list = document.createElement('ul');
    list.className = 'menu';

    const li1 = document.createElement('li');
    li1.className = 'nav-home';
    li1.textContent = 'Home';
    list.appendChild(li1);

    const li2 = document.createElement('li');
    li2.className = 'nav-services';
    li2.textContent = 'Services';
    list.appendChild(li2);

    const li3 = document.createElement('li');
    li3.className = 'nav-about';
    li3.textContent = 'About Me';
    list.appendChild(li3);


    /* Appending all to the content */
    content.appendChild(burger);
    content.appendChild(coName);
    content.appendChild(nav);
    nav.appendChild(list);
}


/* Export render function */
export {
    navRender
}