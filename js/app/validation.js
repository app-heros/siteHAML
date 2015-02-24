define(["jqBootstrapValidation"], function() {

	function init() {
		$('.form input, .form select, .form textarea').not('[type=submit]').jqBootstrapValidation({
			autoAdd: {
				helpBlocks: false
			}
		});
	}

	return{
		init: init
	}

});