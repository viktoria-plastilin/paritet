
window.app.btnCall = () => {


    const btnCallFix = document.querySelector('.js-call-fix');
    const logo = document.querySelector('.js-logo');
    const workBlock = document.querySelector('.js-work');

      
        function trackScroll() {
          const scrolled = window.pageYOffset;
          const coords = document.documentElement.clientHeight;
      
          if (scrolled > coords) {
            btnCallFix.classList.add('js-visible');
          }
          if (scrolled < coords) {
            btnCallFix.classList.remove('js-visible');
          }

          if (scrolled == 1) {
            logo.classList.add('hidden');
            workBlock.classList.add('hidden');
          }
          if (scrolled == 0) {
            logo.classList.remove('hidden');
            workBlock.classList.remove('hidden');
          }
        }
      
        window.addEventListener('scroll', trackScroll);
        

};

window.app.btnCall();