// Select all sections
const sections = document.querySelectorAll("section");

// Create observer
const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);

// Observe every section
sections.forEach(function(section) {

    section.style.opacity = "0";

    section.style.transform = "translateY(30px)";

    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});