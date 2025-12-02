// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const certificateCards = document.querySelectorAll('.certificate-card');
    const modalImage = document.querySelector('#fullCertificateModal .modal-full-cert');

    certificateCards.forEach(card => {
        card.addEventListener('click', () => {
            const fullSrc = card.getAttribute('data-full');
            modalImage.setAttribute('src', fullSrc);
        });
    });
});
