
window.app.mask = () => {

//маска для телефона
    const phoneInputs = document.querySelectorAll('.tell-input');

    if (phoneInputs) {
        phoneInputs.forEach((phoneInput) => {
            IMask(phoneInput, {
                mask: '+{7} (000) 000-00-00'
            });
        });
    }

};

window.app.mask();