2// import * as THREE from './three.min.js';
// import './vanta.net.js';
VANTA.BIRDS({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 600.00,
  minWidth: 800.00,
  scale: 2.00,
  scaleMobile: 1.00,
  backgroundColor: 0x70739,
  birdSize: 0.70,
  wingSpan: 25.00,
  speedLimit: 9.00,
  separation: 23.00,
  cohesion: 47.00
})
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
}
