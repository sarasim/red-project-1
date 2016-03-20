/**
*bxslider*/

$(function(){
  $('.bxslider').bxSlider({
    speed:500,
    controls: false,
    auto: true,
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    mode: 'horizontal',
    slideMargin: 0,
  });
});

/**
*Signup Email*/

$(function(){

    $('.signup-form').on('submit', function(event){
      event.preventDefault();

      if ( $( '#your-email'). val().length !== 0 ) {
            alert('Thanks for signing up!');

      } else {
            alert('Please enter a valid email address!');
      }

    });
});

/**
*Smoothscroll*/

$(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 90
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
