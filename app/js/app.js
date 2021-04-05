import {Swiper, Parallax, Mousewheel,} from 'swiper'

Swiper.use([Parallax, Mousewheel])

// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')


document.addEventListener('DOMContentLoaded', () => {

    // Custom JS


    const swiperIMG = new Swiper('.slider-img', {
        loop: false,
        speed: 2400,
        parallax: true,
        mousewheel:{
            invert: true,
        }
    });

})
