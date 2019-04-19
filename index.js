const navBurger = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector ('.nav-links');
  const navLinks = document.querySelectorAll ('.nav-links li');
  // when we click on the burger the class of nav-link get the class of  nav active

  burger.addEventListener ('click', () => {
    // Toggle button
    nav.classList.toggle ('nav-active');
    // Animating links
    navLinks.forEach ((link, index) => {
      if (link.style.animation) {
        link.style.animation = ' ';
      } else {
        link.style.animation = `navLinkAnimation 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  });
};

navBurger ();

// Header animation

$ (window).on ('scroll', function () {
  if ($ (window).scrollTop ()) {
    $ ('nav').addClass ('black');
  } else {
    $ ('nav').removeClass ('black');
  }
});

// traversy tutorial on sliders

var i = 0; // Start Point
var images = []; // Images Array
var time = 4000; // Time Between Switch

// Image List
images[0] = '../images/nura_photos/main.png';
images[1] = '../images/nura_photos/main7.jpg';
images[2] = '../images/nura_photos/main8.jpg';

// Change Image
function changeImg () {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout ('changeImg()', time);
}

// Run function when page loads
window.onload = changeImg;
