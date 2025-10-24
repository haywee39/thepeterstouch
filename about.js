   
    document.addEventListener("DOMContentLoaded", function() {
        const studentItems = document.querySelectorAll('.student-pro .student-item');

        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                const studentItem = entry.target;
                const stack = studentItem.querySelector('.stack');
                const value = studentItem.querySelector('.value');

                if (entry.isIntersecting) {
                    // Add active class to slide in elements
                    setTimeout(() => {
                        if (stack) stack.classList.add('active');
                    }, 300);

                    setTimeout(() => {
                        if (value) value.classList.add('active');
                    }, 600);
                } else {
                    // Remove active class when out of view
                    if (stack) stack.classList.remove('active');
                    if (value) value.classList.remove('active');
                }
            });
        };

        // Create an Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // Trigger when 30% of the element is visible
        });

        // Observe each student item
        studentItems.forEach(item => {
            observer.observe(item);
        });
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