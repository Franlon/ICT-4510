/*
   Abdiel L. Franco
   ICT-4510
   Summer 2021
   Loads maps using specified coordinates and show markers for the different shops
*/

const coordinates = [18.3585198, -66.0621615];
const accessToken = "pk.eyJ1IjoiZnJhbmxvbiIsImEiOiJja3JubWgzcGsyd2Z3MnVvMmN0aXp1Mm9iIn0.v_gA0VaxmFWu-I4UZZdvCg";
const url = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=".concat(accessToken);
	
var map = L.map('map').setView(coordinates, 11);

L.tileLayer(url, {
	maxZoom: 20,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
				 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: accessToken
}).addTo(map);

var oldSanJuan = L.marker([18.479317020334932, -66.11338444435476]).addTo(map);
oldSanJuan.bindPopup("Old San Juan").openPopup();

var condado = L.marker([18.46564041875437, -66.07012578037897]).addTo(map);
condado.bindPopup("Condado").openPopup();

var guaynabo = L.marker([18.382906333647494, -66.1078912806753]).addTo(map);
guaynabo.bindPopup("Guaynabo").openPopup();

var caguas = L.marker([18.270817053303634, -66.04047051294508]).addTo(map);
caguas.bindPopup("Caguas").openPopup();