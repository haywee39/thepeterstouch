
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

// window.onload = () => {
//   typeWriter1();
//   rotateBackground();
//   setInterval(rotateBackground, 5000); // Change background every 5 seconds
// };
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