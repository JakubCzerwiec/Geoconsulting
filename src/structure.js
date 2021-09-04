// Set up base structure of the page
// Import rendering functions
    import { navRender } from './nav';
    import { homeRender } from './home';
    import { footerRender } from './footer';

// Render structure 
        let renderStructure = () => {
            // Main DOM elements
                const content = document.getElementById('content');
                    const navig = document.createElement('navig')
                    const main = document.createElement('main')
                    const footer = document.createElement('footer')

            // Appending
                content.append(navig, main, footer);

            // Rendering
                navRender()
                homeRender()
                footerRender()
        }

// Export
    export { renderStructure };
