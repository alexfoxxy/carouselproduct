$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    touchDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
      },
      1600: {
        items: 5,
        nav: true,
        loop: true,
      },
    },
  });
});
