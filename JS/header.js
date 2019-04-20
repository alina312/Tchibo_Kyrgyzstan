const navBurger = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector ('.nav-links');
  const navLinks = document.querySelectorAll ('.nav-links li');

  burger.addEventListener ('click', () => {
    nav.classList.toggle ('nav-active');
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

$ (window).on ('scroll', function () {
  if ($ (window).scrollTop ()) {
    $ ('nav').addClass ('black');
  } else {
    $ ('nav').removeClass ('black');
  }
});

var i = 0;
var images = [];
var time = 4000;

images[0] = '../images/nura_photos/main.png';
images[1] = '../images/nura_photos/main7.jpg';
images[2] = '../images/nura_photos/main8.jpg';

function changeImg () {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout ('changeImg()', time);
}
window.onload = changeImg;
