// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const certificateCards = document.querySelectorAll('.certificate-card');
    const modalImage = document.querySelector('#fullCertificateModal .modal-full-cert');
    const viewPdfBtn = document.getElementById('viewPdfBtn');
    const downloadPdfBtn = document.getElementById('downloadPdfBtn');

    certificateCards.forEach(card => {
        card.addEventListener('click', () => {
            const fullSrc = card.getAttribute('data-full');
            const pdfSrc = card.getAttribute('data-pdf');

            modalImage.setAttribute('src', fullSrc);

            // Set PDF links
            viewPdfBtn.setAttribute('href', pdfSrc);
            downloadPdfBtn.setAttribute('href', pdfSrc);
        });
    });
});
