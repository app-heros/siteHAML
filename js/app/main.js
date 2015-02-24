define(["jquery"], function($) {

	if ( $('.header').length){
		$('.header').css({"min-height" : $(window).height()});
	}
	$('.menu').click(function(){
		  if ($('.menu').hasClass('close')){
			  $('.overlay-hugeinc').removeClass('open');
			  $('.menu').removeClass('close');
		  }else{
			  $('.overlay-hugeinc').addClass('open');
			  $('.menu').addClass('close');
		  }
	})   
	
	if ( $('#da-slider').length){
	    $('#da-slider').cslider({
			bgincrement	: 50
	    });
	}
	
});