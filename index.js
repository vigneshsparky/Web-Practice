let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// // certificate

// let slideIndexs = 1;

// function showSlidess(n) {
//   // Your logic to display the slides goes here
//   // You can use this function to handle slide transitions
// }

// // Next/previous controls
// function plusSlidess(n) {
//   showSlidess((slideIndexs += n));
// }

// // Thumbnail image controls
// function currentSlides(n) {
//   showSlidess((slideIndexs = n));
// }

alert("hi");
