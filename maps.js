var app = {
	inicio: function()  {
		this.iniciaFastClick();
	},
	
	iniciaFastClick: function () {
		FastClick.attach(document.body);
	},
	
	dispositivoListo: function() {
		navigator.geolocation.getCurrentPosition(app.dibujaCoordenadas, app.errorAlSolicitarLocalizalizacion);
	},
	
	pintaCoordenadasEnMapa: function(position) {
		var miMapa = L.map('map').setView( [position.coords.latitude, position.coords.longitude], 13);
		L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxnbmd1dGllcnJleiIsImEiOiJjamczZzk2bHAwZ21sMndsbzFrNjFoa3BpIn0.xsH7W3ew3d_29bdCny6NLw', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imaginery <a href="http://mabox.com">Mapbox</a>',
		maxZoom: 18
		}).addTo(miMapa);		
	},
	/*dibujaCoordenadas: function(position){
		var coordsDiv = document.querySelector('#coords');
			coordsDiv.innerHTML = 'Latitud: ' + position.coords.latitude + ' Longitud: ' + position.coords.longitude;
	},
	*/
	errorAlSolicitarLocalizacion: function(error){
		console.log(error.code + ': ' + error.message);
	}
};

if (' addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		app.inicio();
	}, false);
	document.addEventListener('deviceready', function() {
		app.dispositivoListo();
	}, false);
}