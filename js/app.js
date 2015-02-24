requirejs.config({
	"baseUrl": "js/vendor",
	"paths": {
		"app": "../app",
		"jquery": "../../bower_components/jquery/dist/jquery.min",
		"gmaps": "../../bower_components/gmaps/gmaps",
		"bxslider": "../../bower_components/bxslider-4/jquery.bxslider",
		"fancybox": "../../bower_components/fancybox/source/jquery.fancybox.pack",
		"bootstrap": "../../bower_components/sass-bootstrap/dist/js/bootstrap.min",
		"cslider": "jquery.cslider"
	},
	"shim": {
		"fancybox": ["jquery"],
		"bxslider": ["jquery"],
		"bootstrap": ["jquery"]
	}
});

requirejs(["app/main"]);