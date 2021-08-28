

    // Creating footer

let footerRender = () => {
    // const content = document.getElementById('content');
    
    const main = document.querySelector('main');
    const footer = document.createElement('footer');
    main.appendChild(footer);

    footer.innerHTML = '';


    const adress = document.createElement('div');
    adress.className = 'adress';
    adress.innerHTML = '<p><strong>Address:</strong> Malachitowa 5/3, 30-798 Kraków, Poland</p>';

    const email = document.createElement('div');
    email.className = 'email';
    email.innerHTML = '<p><strong>E-mail:</strong> ma4tys@interia.pl</p>';

    const mobile = document.createElement('div');
    mobile.className = 'mobile';
    mobile.innerHTML = '<p><strong>Mobile:</strong> (+48) 882 483 147</p>';

    footer.append(adress, email, mobile)
}

export { footerRender };
