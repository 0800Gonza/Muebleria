import { injectSpeedInsights } from '@vercel/speed-insights';

import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

$(document).ready(function() {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        arrows: true,
    });

    $('.product-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
    });
});

