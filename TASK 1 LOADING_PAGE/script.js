document.addEventListener("DOMContentLoaded", function() {
    // Example: Fade out loader and show main content
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    if (loader && mainContent) {
        setTimeout(() => {
            loader.style.opacity = 0;
            loader.style.display = "none";
            mainContent.style.display = "block";
            mainContent.style.opacity = 1;
        }, 2000); // 2 seconds loading
    }

    // Example: Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});