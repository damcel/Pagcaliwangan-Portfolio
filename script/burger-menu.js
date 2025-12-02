const burger = document.getElementById('burger');
const navMobile = document.getElementById('nav-mobile');

burger.addEventListener('click', () => {
    burger.classList.toggle('active'); // X animation
    navMobile.classList.toggle('active'); // show/hide mobile nav
});