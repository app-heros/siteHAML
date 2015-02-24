define(["bxslider"], function() {

	function init() {
		$('.slider').bxSlider({
			auto: true
		});
	}

	return {
		init: init
	}

});