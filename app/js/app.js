import {Swiper, Parallax, Mousewheel, Controller} from 'swiper'

Swiper.use([Parallax, Mousewheel, Controller])

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

    });


    const swiperText = new Swiper('.slider-text', {
        loop: false,
        speed: 2400,
        mousewheel: {
            invert: true,
        }
    });

    swiperIMG.controller.control = swiperText
    swiperText.controller.control = swiperIMG
})
