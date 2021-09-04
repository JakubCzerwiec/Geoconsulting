

    // Creating footer

    let footerRender = () => {
        
        const footer = document.querySelector('footer');


        footer.innerHTML = '';

            // Company address
                const adress = document.createElement('div');
                adress.className = 'adress';
                adress.innerHTML = '<p><strong>Address:</strong> Malachitowa 5/3, 30-798 Kraków, Poland</p>';

            // Email
                const email = document.createElement('div');
                email.className = 'email';
                email.innerHTML = `<p><strong>E-mail:</strong> <a href='mailto:ma4tys@interia.pl'>ma4tys@interia.pl</a></p>`;

            // Phone
                const mobile = document.createElement('div');
                mobile.className = 'mobile';
                mobile.innerHTML = `<p><strong>Mobile:</strong> <a href='tel:+48882483147'>(+48) 882 483 147</a></p>`;

        // Appending        
        footer.append(adress, email, mobile)
    }

    export { footerRender };
