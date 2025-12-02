document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll('.project-card');
    const modalTitle = document.querySelector('.modal-project-title');
    const modalDescription = document.querySelector('.modal-project-description');
    const modalRole = document.querySelector('.modal-project-role');
    const modalLink = document.querySelector('.modal-project-link');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            modalTitle.textContent = card.dataset.title;
            modalDescription.textContent = card.dataset.description;
            modalRole.textContent = `Role: ${card.dataset.role}`;
            modalLink.href = card.dataset.link;
        });
    });
});
