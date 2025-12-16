$(document).ready(function() {


    // THiS JS IS USED OF SHOW AND HIDE MOBILE MENU

    $('#trigger-overlay').on('click', function(){
        $(".overlay").addClass('open');	
    });
    $('.overlay-close').on('click', function(){
        $(".overlay").removeClass('open');	
    });


    // carousel with custom nav
    $('.firstcarousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
        "<img src='images/icons/leftarrow.png' alt='Left Arrow'>",
        "<img src='images/icons/rightarrow.png' alt='Right Arrow'>"
      ],
      autoplay:true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 4,
        },
      },
    });


    $(".header-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000, 
      autoplaySpeed: 1200,
      dots: false,
      nav: false,
      animateOut: 'fadeOut',     
      animateIn: 'fadeIn',
    });


    var customerOwl = $('.customer-carousel');

    customerOwl.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000, 
      autoplaySpeed: 1200,
      margin: 20,
      dots: false,
      nav: false,
      responsive: {
        0: {
          items: 3
        },
        768: {
          items: 4
        },
        1200: {
          items: 6
        }
      }
    });

    $('.customer-next').click(function () {
      customerOwl.trigger('next.owl.carousel');
    });

    $('.customer-prev').click(function () {
      customerOwl.trigger('prev.owl.carousel');
    });


    // Industries carousel
    var industriesOwl = $('.industries-carousel');

    industriesOwl.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 1000,
      margin: 0,
      dots: false,
      nav: false,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 3
        },
        1024: {
          items: 4
        }
      }
    });

    $('.industries-next').click(function () {
      industriesOwl.trigger('next.owl.carousel');
    });

    $('.industries-prev').click(function () {
      industriesOwl.trigger('prev.owl.carousel');
    });


    // Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      dots: false,
      nav: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
    });


    // Video Testimonial Carousel
    $('.video-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplaySpeed: 1000,
      dots: false,
      nav: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
    });

});