
window.app.initFullPage = () => {


    const fullSlider = document.querySelector('.page');
    const navLinks = document.querySelectorAll('.nav__link');
    const nav = document.querySelector('.js-nav');
    const bntCross = document.querySelector('.js-nav__cross');
    const shadowBox = document.querySelector('.shadow-box');
    const body = document.querySelector('.body');
    const btnCallFix = document.querySelector('.js-call-fix');
    const headerContainer = document.querySelector('.js-nav-open');

    let myFullSwiper;

    function navClossed (){
        nav.classList.remove('open');
        body.classList.remove('overflow');
        shadowBox.classList.remove('open');
        if(window.innerWidth < 1200){
            headerContainer.classList.remove('hidden');
        }
    };

    function desctopSlider(){
        if(window.innerWidth >= 1200){
            const sliderFullPage = new Swiper('.page', {
        
                wrapperClass: 'page__wrapper',
                slideClass: 'page__screen',
        
                direction: 'vertical',
        
                slidesPerView: 'auto',
        
                paralax: true,
        
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: true,
                },
        
                mousewheel:{
                    sensitivity: 1,
                },
        
                watchOverflow: true,
        
                speed: 800,
        
                //observer: true,
                //observeParents: true,
                //observeSlideChildren: true,
        
                pagination: {
                    el: '.page__pagination',
                    type: 'bullets',
                    clickable: true,
                    bulletClass: 'page__bullet',
                    bulletActiveClass: 'page__bullet-active',
                },
        
                /* scrollbar: {
                    el: '.page__scroll',
                    gragClass: 'page__drag-scroll',
                    draggable: true
                }, */

                init: false,

                on: {
                    init: function (){
                        menuSlider();
                        createNumberActiveSlide();
                    },
                    slideChange: function (){
                        menuSliderRemove();
                        navLinks[sliderFullPage.realIndex].classList.add('active');
                        createNumberActiveSlide();
                        changeButton();
                    },
                },

        
            });

            //console.log(sliderFullPage.realIndex);

            /* меню слайдера */
            function menuSlider(){
                if(navLinks.length > 0){
                    navLinks[sliderFullPage.realIndex].classList.add('active');
                    for(let index = 0; index < navLinks.length; index++){
                        const menuLink = navLinks[index];
                        menuLink.addEventListener('click', function (e){
                            menuSliderRemove();
                            sliderFullPage.slideTo(index, 800);
                            menuLink.classList.add('active');
                            e.preventDefault();
                            navClossed();
                        })
                    }
                }
            }

            function menuSliderRemove(){
                let menuLinkActive = document.querySelector('.nav__link.active');
                if(menuLinkActive){
                    menuLinkActive.classList.remove('active');
                }
            }

            /* / меню слайдера */

            /* создание номера активного слайда */
            
            const pagePaginationBox = document.querySelector('.page__pagination');
            
            function createNumberActiveSlide (){
                pagePaginationBox.dataset.number = sliderFullPage.realIndex + 1;
            }
            
            /* / создание номера активного слайда */

            /* скрыть шапку */
            const headerCall = document.querySelector('.header__call--desktop');
            const logo = document.querySelector('.js-logo');
            const workBlock = document.querySelector('.js-work');

            function changeButton (){
                if(sliderFullPage.realIndex > 0){
                    headerCall.classList.add('page-scroll');
                    logo.classList.add('hidden');
                    workBlock.classList.add('hidden');
                } else{
                    headerCall.classList.remove('page-scroll');
                    logo.classList.remove('hidden');
                    workBlock.classList.remove('hidden');
                }
                
            }
            /* / скрыть шапку */

            sliderFullPage.init();

            
        }
        if(window.innerWidth < 1200){


            if(fullSlider.classList.contains('swiper-container-initialized')){
                sliderFullPage.destroy()
                sliderFullPage.mousewheel.disable()

            }
            
        }
    }

    desctopSlider();

    window.addEventListener('resize', desctopSlider());


};


window.app.initFullPage();