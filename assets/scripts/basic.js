'use strict';

$(document).ready(function() {
    // Show or hide the button when scrolling
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('.btn-go-top').fadeIn();
        } else {
            $('.btn-go-top').fadeOut();
        }
    });
    
    // Scroll to the top when the button is clicked
    $('.btn-go-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});