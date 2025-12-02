document.addEventListener("DOMContentLoaded", 
() => {
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
});