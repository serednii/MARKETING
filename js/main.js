$(function () {

  $(".menu a, .go-top").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      },
    ]
  });

  var mixer = mixitup('.portfolio__content');
});

