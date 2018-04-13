/***********************************************
* Author: Mudassar Saleem                      *
* https://www.fiverr.com/users/mudassarsaleem  *
************************************************/


$(document).ready(function () {

    /************************************
    *
    * Place Custom Javascript Code here!
    *
    *************************************/

    /************<SMOOTH SCROLL SCRIPT>*************/
    $(window).scroll(function () {
        FixHeader();
    });

    FixHeader();
    function FixHeader() {
        if ($(window).scrollTop() > 30) {
            $('.main-navbar-hero-section').addClass('fixed-header');
            $('.main-header-navbar-wrapper').addClass('fixed-header');
        }
        else {
            $('.main-navbar-hero-section').addClass('fixed-header');
            $('.main-header-navbar-wrapper').removeClass('fixed-header');
        }
    }

});


var navbarOffset = 96;
$(window).resize(function () {
    setNavbarOffset();
});

setNavbarOffset();
function setNavbarOffset() {
    if (window.innerWidth <= 767) {
        navbarOffset = 82;
    }
}
$(document).ready(function () {
    $(document).on("scroll", onScroll);


    //smoothscroll
    $('#main-navbar a[href^="#"], .footer-options-menu .options a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2 - navbarOffset
        }, 500, 'swing', function () {
            if (history.pushState) {
                history.pushState(null, null, menu);
            }
            else {
                window.location.hash = menu;
            }
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#main-navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= (scrollPos + navbarOffset) && refElement.position().top + refElement.height() > (scrollPos + navbarOffset)) {
            $('#main-navbar li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}



/*******************************************************/
/*Flexisel Slider*/
/*******************************************************/
$("#flexiselDemo3").flexisel({
    visibleItems: 5,
    itemsToScroll: 1,
    autoPlay: {
        enable: true,
        interval: 5000,
        pauseOnHover: true
    },
    responsiveBreakpoints: {
        portrait: {
            changePoint: 426,
            visibleItems: 1,
            itemsToScroll: 1
        },
        landscape: {
            changePoint: 768,
            visibleItems: 3,
            itemsToScroll: 1
        }
    }
});
