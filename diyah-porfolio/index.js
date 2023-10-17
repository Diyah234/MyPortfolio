let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("images2");
  let dots = document.getElementsByClassName("circle");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const slideshowContainer = document.querySelector('.slideshow-container');
let touchStartX = null;
let touchEndX = null;

slideshowContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

slideshowContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const threshold = 50; // Adjust this threshold to control swipe sensitivity

    if (touchStartX - touchEndX > threshold) {
        // Swipe right to left, go to next slide
        plusSlides(1);
    } else if (touchEndX - touchStartX > threshold) {
        // Swipe left to right, go to previous slide
        plusSlides(-1);
    }
}

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

const menuButton = document.getElementById("nav-icon2");
const navBar = document.getElementById("nav-bar");

menuButton.addEventListener("click", function() {
  if (navBar.style.display === "block") {
    navBar.style.display = "none"; // Hide the navigation menu
  } else {
    navBar.style.display = "block"; // Show the navigation menu
  }
});



var cv = document.getElementById("cv");
function download(){
  cv.download();
}
  