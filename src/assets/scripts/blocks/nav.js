
window.app.openNav = () => {


    const burger = document.querySelector('.burger__btn');
    const nav = document.querySelector('.js-nav');
    const bntCross = document.querySelector('.js-nav__cross');
    const shadowBox = document.querySelector('.shadow-box');
    const body = document.querySelector('.body');
    const btnCallFix = document.querySelector('.js-call-fix');
    const headerContainer = document.querySelector('.js-nav-open');

    burger?.addEventListener('click', ()=>{
        nav.classList.add('open');
        body.classList.add('overflow');
        shadowBox.classList.add('open');
        if(btnCallFix.classList.contains('js-visible')){
            btnCallFix.classList.remove('js-visible')
        }
        if(window.innerWidth < 1200){
            headerContainer.classList.add('hidden');
        }
        
    })
    function navClossed (){
        nav.classList.remove('open');
        body.classList.remove('overflow');
        shadowBox.classList.remove('open');
        if(window.innerWidth < 1200){
            headerContainer.classList.remove('hidden');
        }
    };
    bntCross?.addEventListener('click', ()=>{
        navClossed();
    })

    shadowBox?.addEventListener('click', ()=>{
        navClossed();
    })
    

};

window.app.openNav();