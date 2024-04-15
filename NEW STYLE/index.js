function skillheilight() {
  let skill1 = document.getElementsByClassName("skill1");
  console.log(skill1);
}

function repeat() {
  let name = document.getElementById("developername").value;
  console.log(name);
}

// name content
const name = "VIGNESHWARAN A";
const nameElement = document.getElementById("developername");
// window.addEventListener(('value')=>{

// })
let currentIndex = 0;
const interval = 200;

function displayNextLetter() {
  if (currentIndex < name.length) {
    nameElement.textContent = name.substring(0, currentIndex + 1);
    currentIndex++;
    setTimeout(displayNextLetter, interval);
  }
}
// name content end

// Navigation blur
document.addEventListener("DOMContentLoaded", function () {
  const navElement = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Set a threshold value (e.g., 200 pixels from the top)
    const threshold = 200;

    // Add or remove the blur class based on scroll position
    if (scrollPosition > threshold) {
      navElement.classList.add("blur");
    } else {
      navElement.classList.remove("blur");
    }
  });
});
// navigation blur end

// scroll start
// academic details
document.addEventListener("DOMContentLoaded", function () {
  const academicDetailsLink = document.getElementById("academic");
  const academicDetailsHeading = document.getElementById("acad");

  academicDetailsLink.addEventListener("mouseover", function (event) {
    event.preventDefault();
    const yOffset =
      academicDetailsHeading.getBoundingClientRect().top + window.scrollY;
    const middleOfWindow = window.innerHeight / 3;
    const scrollToY = yOffset - middleOfWindow;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  });
});

// scroll end
document.addEventListener("DOMContentLoaded", function () {
  const academicDetailsLink = document.getElementById("certificate");
  const academicDetailsHeading = document.getElementById("certifi");

  academicDetailsLink.addEventListener("mouseover", function (event) {
    event.preventDefault();
    const yOffset =
      academicDetailsHeading.getBoundingClientRect().top + window.scrollY;
    const middleOfWindow = window.innerHeight / 3;
    const scrollToY = yOffset - middleOfWindow;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  });
});

// scroll start
// academic details

// // One img to other imag start
// const arrows = document.querySelectorAll(".arrow");

// arrows.forEach((arrow) => {
//   arrow.addEventListener("click", () => {
//     const nextCertificate = arrow.parentElement.nextElementSibling;
//     nextCertificate.scrollIntoView({ behavior: "smooth" });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const academicDetailsLink = document.getElementById("bt1");
  const academicDetailsHeading = document.getElementById("imgdiv2");

  academicDetailsLink.addEventListener("mouseover", function (event) {
    event.preventDefault();
    const yOffset =
      academicDetailsHeading.getBoundingClientRect().top + window.scrollY;
    const middleOfWindow = window.innerHeight / 3;
    const scrollToY = yOffset - middleOfWindow;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  });
});

// One img to other imag end

// scroll end

// Get the button element
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// slide window
let slideIndex = 1;

function showSlides(n) {
  // Logic to display the current slide
  // You can use this function to show/hide slides
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Call showSlides(1) initially to display the first slide
showSlides(1);
