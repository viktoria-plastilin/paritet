
window.app.order = () => {


    const orderInput = document.querySelectorAll('.order__input');

    orderInput?.forEach((input) =>{
        input.addEventListener('change', () =>{
            input.closest('.order__ladel').classList.add('filled')
            input.closest('.order__ladel').classList.remove('error')
            if(input.value == ''){
                input.closest('.order__ladel').classList.remove('filled')
            }
        })
        input.addEventListener('focus', () =>{
            input.closest('.order__ladel').classList.remove('error')
        })
    })
    

};

window.app.order();