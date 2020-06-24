$('.slider-wrapper').slick({
  arrows: false,
  dots: true
  // autoplay: true,
  // autoplaySpeed: 2000,
})
$('.header_burger').on('click', function() {
  $('.header_burger, .header_inner-menu').toggleClass('active')
  $('body').toggleClass('lock')
})

