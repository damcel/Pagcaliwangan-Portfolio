const backToTopBtn = document.getElementById("backToTop");

        // Show button when user scrolls down 100px
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = "block";
            } else {
            backToTopBtn.style.display = "none";
            }
        };

        // Scroll to top when clicked
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
            top: 0,
            behavior: "smooth"
            });
        });