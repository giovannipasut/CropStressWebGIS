// ==========================================
// MYCROP WEBGIS
// ==========================================

// Coordinate del campo sperimentale

const field = [52.238111, 6.865472];

// Creazione mappa

const map = L.map('leaflet-map', {

    zoomControl: true

}).setView(field, 18);

// Basemap OpenStreetMap

L.tileLayer(

    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

    {

        maxZoom: 22,

        attribution: '© OpenStreetMap'

    }

).addTo(map);

// Marker del campo

L.marker(field)

    .addTo(map)

    .bindPopup(

        "<b>Experimental Wheat Field</b><br>MyCrop Study Area"

    )

    .openPopup();