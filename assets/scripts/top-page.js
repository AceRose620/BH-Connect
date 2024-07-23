'use strict'

$(document).ready(function () {

        var screen_width = $( window ). width();

        $(".image-slide").slick({
            dots: true,
            centerMode: true,
            slidesToShow: 3,
            arrows: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        // arrows: true,
                        centerMode: false,
                        centerPadding: "0px",
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        // arrows: true,
                        centerMode: false,
                        centerPadding: "0px",
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                },
            ],
        });

        $(".recommend-production-list").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToScroll: 1,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToShow: 2,
                    },
                },
            ],
        });
        $(".product-list").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                    },
                },
            ],
        });
    });