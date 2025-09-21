// LOADER 
    let percent = 0;
    let percentageText = document.getElementById("percentage");
    let progressBarFill = document.querySelector(".progress-bar-fill");
    let loader = document.getElementById("loader");
    let content = document.getElementById("content");

    let interval = setInterval(() => {
      percent++;
      percentageText.textContent = percent + "%";
      progressBarFill.style.width = percent + "%";

      if (percent >= 100) {
        clearInterval(interval);
        loader.classList.add("fade-out");
        setTimeout(() => {
          loader.style.display = "none";
          content.style.display = "block";
        }, 800);
      }
    }, 30); // Adjust speed (30ms × 100 = 3 seconds total)
  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
     const texts = [
            "Your source for cutting-edge LED displays",
            "Audio visuals & Publicity Equipments",
            "Lecture and Auditorium Seats",
            "Corporate Awareness Concepts"
        ];

        let currentTextIndex = 0;
        const typewriterElement = document.getElementById('typewriter');

        function typeWriter(text, i = 0) {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(() => typeWriter(text, i), 100);
            } else {
                setTimeout(eraseText, 2000);
            }
        }

        function eraseText() {
            let currentText = typewriterElement.textContent;
            if (currentText.length > 0) {
                typewriterElement.textContent = currentText.slice(0, -1);
                setTimeout(eraseText, 50);
            } else {
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(() => typeWriter(texts[currentTextIndex]), 500);
            }
        }

        // Start the typewriter effect
        typeWriter(texts[currentTextIndex]);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const homeSection = document.getElementById('home');
const images= [
  'url("./backgrdimg/led.jpg")',
  'url("./backgrdimg/backgrd.jpg")',
  'url("./backgrdimg/conf-seat.jpg")',
  'url("./backgrdimg/led2.jpg")',
  'url("./backgrdimg/redmixr.jpg")',
  'url("./backgrdimg/mic-conf.jpg")'
  
];
let current = 0;

function changeBackground() {
  homeSection.style.backgroundImage = images[current];
  current = (current + 1) % images.length;
}


changeBackground(); 
setInterval(changeBackground, 3000);

// ***************************************
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