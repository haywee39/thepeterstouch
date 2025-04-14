 // TYPEWRITER 
const textToType = "Passionately delivering solutions that are not only technologically advanced but also seamlessly integrated and user-friendly. \n\n Your trusted partner for state-of-the-art LED displays,cutting-edge audio-visual solutions, impactful publicity equipments."

const typingSpeed = 10; // Adjust this value (in milliseconds) to control the typing speed
let textIndex = 0;
const textElement = document.getElementById('typewriter-text');

function typeWriter() {
  if (textIndex < textToType.length) {
    textElement.innerHTML += textToType.charAt(textIndex);
    textIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}

// Call the typeWriter function when the page loads
window.onload = typeWriter;

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const homeSection = document.getElementById('home');
const images= [
  'url("./backgrdimg/backgrd.jpg")',
  'url("./backgrdimg/mixr.jpg")',
  'url("./backgrdimg/mic-conf.jpg")'
  // "",
  // "./backgrdimg/mic-conf.jpg"
];
let current = 0;

function changeBackground() {
  homeSection.style.backgroundImage = images[current];
  current = (current + 1) % images.length;
}


changeBackground(); 
setInterval(changeBackground, 3000);

// ***************************************
// var i = 0;
// var txt = 'Your trusted partner for state-of-the-art LED displays,cutting-edge audio-visual solutions, impactful publicity equipments.lorem ipsum ib din sortcnv lorem ipsum ib din sortcnvlorem i' 
//              /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("msg").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// ***************************************************************

// COMPANY LOGO APPEARS ON Slide in TO THE POINT 

// document.addEventListener("DOMContentLoaded", function () {
//   const image = document.querySelector(".slide-in-image");

//   function handleScroll() {
//       const imageRect = image.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Check if the image is in the viewport
//       if (imageRect.top < windowHeight && imageRect.bottom > 0) {
//           image.classList.add("visible");
//       } 
//       // Remove 'visible' class only when the image is completely out of view
//       else if (imageRect.bottom <= 0 || imageRect.top >= windowHeight) {
//           image.classList.remove("visible");
//       }
//   }

//   window.addEventListener("scroll", handleScroll);
// });

// *********************************************************************************
// Select all boxes
const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('reset'); // Ensure reset isn't applied during visibility
          } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('reset'); // Reset state when scrolled out
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the box is visible
      }
    );

    // Observe each box
    boxes.forEach((box) => observer.observe(box));