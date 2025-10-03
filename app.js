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

// TESTIMONIAL ON HOMEPAGE 
// Carousel Logic
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let current = 0;

// Create dots dynamically
cards.forEach((_, index) => {
  const dot = document.createElement("span");
  if (index === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function showSlide(index) {
  cards.forEach(card => card.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  cards[index].classList.add("active");
  dots[index].classList.add("active");
  current = index;
}

prevBtn.addEventListener("click", () => {
  let index = current - 1;
  if (index < 0) index = cards.length - 1;
  showSlide(index);
});

nextBtn.addEventListener("click", () => {
  let index = current + 1;
  if (index >= cards.length) index = 0;
  showSlide(index);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

// Auto-slide
setInterval(() => {
  let index = current + 1;
  if (index >= cards.length) index = 0;
  showSlide(index);
}, 6000);



// SCRIPT FOR THE STEPS TO WORK WITH US
const targets = document.querySelectorAll(".timeline ol li");
const threshold = 0.5;
const ANIMATED_CLASS = "in-view";

function callback(entries) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(ANIMATED_CLASS);
      stepsObserver.unobserve(elem);
    } else {
      elem.classList.remove(ANIMATED_CLASS);
    }
  });
}

// Use a unique name for the observer to avoid conflicts
const stepsObserver = new IntersectionObserver(callback, { threshold });

targets.forEach((target) => {
  stepsObserver.observe(target);
});





