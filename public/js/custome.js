
$(".mobileNavBtn, .overLay").click(function(){
    if ($(this).parents('body').hasClass('openNav')) {
        $(this).parents('body').removeClass('openNav');
    } else {
        $(this).parents('body').addClass('openNav');
    }
});
$(window).scroll(function(){
	var top = $(window).scrollTop();
	if (top > 50) {
		$('.header').addClass('headerFix');
	} else {
		$('.header').removeClass('headerFix');
	}
});


$(".topNoti .closeIcon").click(function(){
  $(".topNoti").slideUp();
});

$(".colasp h3").click(function(){
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
    $(this).next(".colaspContent").slideDown();
  } else {
    $(this).addClass('open');
    $(this).next(".colaspContent").slideUp();
  }
});

$(".graphTab span").click(function(){
  $(".graphTab span").removeClass('active');
  $(this).addClass('active');
});


var $animation_elements = $('.animation');
var $window = $(window);
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
    	$element.addClass('ani');
    } else {
    	//$element.removeClass('ani');
    }
  });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');