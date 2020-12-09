
/* Defining render function for Main page */
function homeRender () {
    const content = document.getElementById('content');


    /* Set up structure */
    const main = document.createElement('main');
    content.appendChild(main);

    const mainText = document.createElement('div');
    mainText.className = 'mainText';
    
    const mainSaidbar = document.createElement('div');
    mainSaidbar.className = ('mainSaidbar');

    main.append(mainText, mainSaidbar);


    /* Filling the structure */
    /* Text */
    const header = document.createElement('h1');
    header.innerText = 'Company profile';
    mainText.appendChild(header);

    const text = document.createElement('p');
    text.innerText = 'Michał Matysik Geconsulting is a one-person consulting company providing a wide spectrum of sedimentological services in carbonate and mixed carbonate-evaporiticsiliciclastic-siliceous systems and reservoirs. To best solve client problems, the company can work on different types of materials (outcrops, drill cores, side-wall cores, cuttings, thin sections) and datasets (stable isotope, cathodoluminescence, X-ray diffraction, X-ray fluorescence, scanning electron microscopy, total organic carbon, well log, and porosity-permeability plug data). All projects are held in the strictest confidence and are completed to a high standard with a rich photographic documentation.';
    mainText.appendChild(text);

    /* Adress and contact */
    const adress = document.createElement('div');
    adress.className = 'adress';
    adress.innerHTML = '<p><strong>Address:</strong> Malachitowa 5/3, 30-798 Kraków, Poland</p>';

    const email = document.createElement('div');
    email.className = 'email';
    email.innerHTML = '<p><strong>E-mail:</strong> ma4tys@interia.pl</p>';

    const mobile = document.createElement('div');
    mobile.className = 'mobile';
    mobile.innerHTML = '<p><strong>Mobile:</strong> (+48) 882 483 147</p>';

    mainSaidbar.append(adress, email, mobile);


}

/* Export render function */
export {homeRender}