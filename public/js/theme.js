(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // $('#nav').pushpin({
    //     top: 50
    // });

    $(".button-collapse").sideNav({
        closeOnClick: true,
        draggable: true
    });

    $(".match").matchHeight();
})(jQuery); // End of use strict
