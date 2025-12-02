document.addEventListener("DOMContentLoaded", () => {

    const projectItems = document.querySelectorAll('.projects-title, .project-card');

    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-project');

                // If it's a card, add hover-fast after short delay
                if (entry.target.classList.contains('project-card')) {
                    setTimeout(() => {
                        entry.target.classList.add('hover-fast');
                    }, 800); // matches slide-in duration
                }

                projectsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    projectItems.forEach(el => projectsObserver.observe(el));

});
