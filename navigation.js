let menu_icon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav() {
  console.log('Toggle the nav bar!');
  // add class or remove it from HTML elements
  navigation.classList.toggle("expand");
  header.classList.toggle("expand");
}

menu_icon.addEventListener('click', toggleNav);

let figureImages = document.querySelectorAll('figure img');

function highlightImage(event) {
  event.target.style.transform = "scale(1.1)";
  event.target.style.transition = "transform 0.3s ease"; 
}

function resetImage(event) {
  event.target.style.transform = "scale(1)"; 
}

figureImages.forEach((img) => {
  img.addEventListener('mouseover', highlightImage); // Zoom on hover
  img.addEventListener('mouseout', resetImage); // Reset zoom on mouse out
});