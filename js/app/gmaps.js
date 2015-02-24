define(["gmaps"], function() {

	function createMapWithMarker(el) {
		if ($(el).length) {
			var map = new GMaps({
				el: el,
				lat: 43.31647,
				lng: -0.36495,
				zoom: 15
			});

			map.addMarker({
				lat: 43.31647,
				lng: -0.36495,
				title: 'Université du Temps Libre d\'Aquitaine - Pau',
				icon: 'img/main/marker.png'
			});
		}
	}

	return{
		createMapWithMarker: createMapWithMarker
	}

});