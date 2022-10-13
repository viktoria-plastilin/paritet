window.app.openBurger = () => {

    // Open menu burger
    const burger = document.querySelector('.burger');
    //const menu = document.querySelector('.header__menu');

    burger?.addEventListener('click', ()=>{
        burger.classList.toggle('open');
        //menu.classList.toggle('open');
    })

};

window.app.openBurger();