/*global $*/

$(function () {
    
    "use strict";
    
/*==================================
    * Author        : Ideas_Factory
    * Template Name : Soliman - Creative Portfolio Template
==================================== */
    
/*=========== TABLE OF CONTENTS ===========

    01. Isotope Plugin
    02. Preloader
    03. window height
    04. Navbar
    05. Smooth Scroll
    06. MagnifPopup Plugin
    07. owl.carousel plugin
    08. Form Validation
    09. Window Scroll
    10. Window Resize
    11. FitText Plugin
    12. typed Plugin
    13. Jquery.mb.YTPlayer Plugin

======================================*/


    var $grid = $('.grid'),
        i;

    $(window).on('load', function () {

        /*--------------------------------
            01. Isotope Plugin
        ----------------------------------*/
        $grid.isotope({
          // options...
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: '.grid-sizer'
            }
        });
        //-- filter items on button click --//
        $(".portfolio ul li").on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $(this).addClass("active_filter").siblings().removeClass("active_filter");
        });
        
        /*--------------------------------
            02. Preloader
        ----------------------------------*/
        $('.startLoad').fadeOut('slow');
        
    });//--- window(load) ---//
    
    /*----------------------------------------------
        03. window height
    -----------------------------------------------*/

        $(".full_height").height($(window).height());

    /*--------------------------------
        04. Navbar
    ----------------------------------*/
    //-- navbar mobile menu --//
    $("nav .navbar-nav li a").on('click', function () {
        $(".navbar-collapse").removeClass("in");
        $(".navbar-toggle").addClass("collapsed");
    });

    function nav__scroll(){

        if ($(window).scrollTop() >= 50) {
            $("nav").addClass("nav_scroll");
        } else {
            $("nav").removeClass("nav_scroll");
        }

    }
    nav__scroll();
    
    /*--------------------------------
        05. Smooth Scroll
    ----------------------------------*/
    $(".smooth_scroll").on('click', function (event) {

        event.preventDefault();
        if (this.hash !== "") {
            
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                
                window.location.hash = hash;
            });
            
        }
        
    });

    /*--------------------------------
       06. MagnifPopup Plugin
    ----------------------------------*/
    var my_img = '.my_img',
        magnifPopup = function () {

        $(my_img).magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true
            }
        });

    };
    // Call the functions 
    if( $(my_img).length ){

        magnifPopup();

    }

    $('.boxContent').on("click", function () {

        $(this).parents('.box').find(my_img).trigger("click");

    });

    /*----------------------------------------
        07. owl.carousel plugin
    ------------------------------------------*/
    $("#testimonial-carousel").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        navigation: false,
        navigationText: ["", ""],
        slideSpeed: 1000,
        singleItem: true,
        autoPlay: true
    });

    /*--------------------------------
        08. Form Validation
    ----------------------------------*/
    $('.contact form .submit').on('click', function () {
        $('.contact form .form-control').removeClass("errorForm");
        $('.msg_success,.msg_error').css("display","");
        
        var error = false,
            name = $('.contact form input[type="text"]');
        
        if (name.val() === "" || name.val() === " ") {
            error = true;
            $(name).addClass("errorForm");
        }
        
        var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
            email = $('.contact form input[type="email"]');
        
        if (email.val() === "" || email.val() === " ") {
            $(email).addClass("errorForm");
            error = true;
        } else if (!email_compare.test(email.val())) {
            $(email).addClass("errorForm");
            error = true;
        }
        
        var msg = $('.contact form textarea');
        
        if (msg.val() === "" || msg.val() === " ") {
            error = true;
            $(msg).addClass("errorForm");
            
        }
    
        if (error === true) {
            return false;
        }
        
        var data_string = $('.contact form').serialize();
        
    
        $.ajax({
            type: "POST",
            url: $('.contact form').attr('action'),
            data: data_string,
            
            success: function (message) {
                if (message === 'SENDING') {
                    $('.msg_success').fadeIn('slow');
                } else {
                    $('.msg_error').fadeIn('slow');
                }
            }
            
        });
        
        return false;
        
    });

    /*--------------------------------
        09. Window Scroll
    ----------------------------------*/
    $(window).on("scroll", function () {

        var my_skill = ".about .skills .skill";
        if ($(my_skill).length !== 0){
            spy_scroll(my_skill);
            spy_scroll(".animated","animate"); 
        }
        
        nav__scroll();
        
        //-- Scroll top --//
        var scrollTop = $(".top");
        if (scrollTop.length !== 0) {
            if ($(window).scrollTop() >= $(".about").offset().top) {
                scrollTop.addClass("scroll_top_show");
            } else {
                scrollTop.removeClass("scroll_top_show");
            }
        }
        
    });

    /*--------------------------------
        10. Window Resize
    ----------------------------------*/
    $(window).on("resize", function () {

        $(".full_height").height($(window).height());

    });

    /*--------------------------------
        11. FitText Plugin
    ----------------------------------*/ 
    var home__h1 = ".home h1";

    if ($(".home .type h1").length){

        $(home__h1).fitText(1, { maxFontSize: 75 });

    } else {

        $(home__h1).fitText(1, { maxFontSize: 90 });

    }

    /*--------------------------------
        12. typed Plugin
    ----------------------------------*/ 
    
    if ($("#typed").length){

        var typed = new Typed("#typed", {
            stringsElement: '#typed-strings',
            typeSpeed: 40,
            backSpeed: 0,
            backDelay: 1500,
            startDelay: 1000,
            fadeOut: false,
            loop: true
        });

    }

    /*--------------------------------
        13. Jquery.mb.YTPlayer Plugin
    ----------------------------------*/ 
    if ($("#bgndVideo").length){

        jQuery("#bgndVideo").YTPlayer({
            autoPlay:true,
            startAt:0,
            showControls: false,
            opacity: 1
        });

    }



});
