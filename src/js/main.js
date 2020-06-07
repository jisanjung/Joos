import { Menu } from "./global.js";

// header
let m = new Menu("hamburger--spin-r");
m.toggleMenu();

// parallax
let rellax = new Rellax(".rellax");

// animate on scroll
AOS.init();

// leaflet map 
var mymap = L.map('mapid').setView([40.71, -74.00], 10);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/           copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
var marker = L.marker([40.71, -74.00]).addTo(mymap);
marker.bindPopup("New York, New York").openPopup();