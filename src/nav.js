// Import Logo image
    import coLogo from './img/logo.png';

    const logo = new Image();
    logo.src = coLogo;

// Navigation render function
    let navRender = () => {
        const navig = document.querySelector('navig');

        // Co-name
            const coName = document.createElement('div');
            coName.className = 'coName';

                const coNameTop = document.createElement('div');
                coNameTop.className = 'coNameTop';
                coNameTop.innerHTML = 'Michał Matysik Geoconsulting';

                const coNameSub = document.createElement('div');
                coNameSub.className = 'coNameSub';
                coNameSub.innerHTML = `Reservoir sedimentology`;

                const coNameBox = document.createElement('div');
                coNameBox.className = 'coNameBox';

            coNameBox.append(coNameTop, coNameSub)

            coName.append(logo, coNameBox);


        // Nav buttons and menu div
            const menu = document.createElement('div');
            menu.className = 'hidden menu';

                const li1 = document.createElement('div');
                li1.className = 'nav home';
                li1.textContent = 'Home';

                const li2 = document.createElement('div');
                li2.className = 'nav services';
                li2.textContent = 'Services';

                const li3 = document.createElement('div');
                li3.className = 'nav about';
                li3.textContent = 'About Me';

                const li4 = document.createElement('div');
                li4.className = 'nav pubList';
                li4.textContent = 'Publication list';

            menu.append(li1, li2, li3, li4);


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
            navig.append(coName, menu, burger);

    }


// Export render function
    export { navRender }