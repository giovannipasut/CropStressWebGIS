// Coordinate del campo

const field = [52.238111, 6.865472];

// Crea la mappa

const map = L.map('map', {

    zoomControl:true

}).setView(field,18);


// OpenStreetMap

L.tileLayer(

'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

{

    maxZoom:22,

    attribution:'© OpenStreetMap'

}).addTo(map);


// Marker del campo

L.marker(field)

.addTo(map)

.bindPopup("<b>Experimental Wheat Field</b><br>MyCrop Study Area")

.openPopup();