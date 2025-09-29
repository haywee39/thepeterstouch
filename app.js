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

        // Typewriter effect
    const sentences = [
      'Your source for cutting-edge LED displays',
      'Audio visuals & Publicity Equipments',
      'Lecture and Auditorium Seats',
      'Corporate Awareness Concepts'
    ];

    const typedTextElement = document.getElementById('typed-text');
    let sentenceIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentSentence = sentences[sentenceIndex];
      if (!isDeleting) {
        typedTextElement.textContent = currentSentence.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentSentence.length) {
          isDeleting = true;
          setTimeout(type, 1000);
          return;
        }
      } else {
        typedTextElement.textContent = currentSentence.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          sentenceIndex = (sentenceIndex + 1) % sentences.length;
        }
      }
      setTimeout(type, isDeleting ? 50 : 100);
    }

    // Start the typewriter effect
    type();
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // Background slideshow
    const backgrounds = [
      './backgrdimg/conf-seat.jpg',
      './backgrdimg/led2.jpg',
      './backgrdimg/mic-conf.jpg'
    ];

    let currentIndex = 0;
    const backgroundElement = document.querySelector('.background');

    function changeBackground() {
      currentIndex = (currentIndex + 1) % backgrounds.length;
      backgroundElement.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    }

    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
    backgroundElement.style.backgroundImage = `url('${backgrounds[0]}')`;

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
      //               './backgrdimg/conf-seat.jpg',
      // './backgrdimg/led2.jpg',
      // './backgrdimg/mic-conf.jpg'
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