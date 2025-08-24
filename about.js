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





// TOP PIC- 1 FROM THE LEFT 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".abt-texts1 .pic1");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});
// ******************************************************
// MIDDLE PIC FROM LEFT 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".mid-A");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});
// ******************************************************
// BOTTOM PIC FROM LEFT 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".abt-texts2 .picA");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});

// ***********************************************************
// BOTTOM PIC- 1 FROM THE RIGHT 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".abt-texts1 .pic2");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});
// ******************************************************
// MIDDLE PIC FROM RIGHT 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".mid-B");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});
// ***********************************************************
// BOTTOM PIC B FROM RIGHT 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".abt-texts2 .picB");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});
// ***********************************************************************

// THE CORE VISION MISSION IN THE ABOUT SECTION PICTURES SLIDES IN 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".belief-each");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});


// **********************************************************************************