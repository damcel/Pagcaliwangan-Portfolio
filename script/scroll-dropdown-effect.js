document.addEventListener("DOMContentLoaded", () => {

    /* EXISTING ABOUT SECTION OBSERVER */
    const elements = document.querySelectorAll('.about-text, .about-roles');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    
    /* NEW OBSERVER FOR SKILLS SECTION */
    const skillsItems = document.querySelectorAll('.skills-title, .skill-category');


    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-top');
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    skillsItems.forEach(el => skillsObserver.observe(el));

});