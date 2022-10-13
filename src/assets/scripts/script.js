// script.js

// Script

document.addEventListener("DOMContentLoaded", () => {

    window.app = {};

    // Plugins

    @@include('./plugins/swiper.js');
    @@include('./plugins/simplebar.js');
    @@include('./plugins/fullpage.js');
    @@include('./plugins/imask.js');
    @@include('./plugins/glightbox.js');

    // Blocks

    @@include('./blocks/open-popup.js');
    @@include('./blocks/burger.js');
    @@include('./blocks/doc-slider.js');
    @@include('./blocks/riple.js');
    @@include('./blocks/fullpage.js');
    @@include('./blocks/btn-call.js');
    @@include('./blocks/nav.js');
    @@include('./blocks/order.js');
    @@include('./blocks/mask-tell.js');
    @@include('./blocks/map.js');
    @@include('./blocks/glightbox.js');

});
