const menuToggle = document.querySelector('.menuToggle');
const spandukResponsive = document.querySelector('.spandukResponsive');

menuToggle.addEventListener('click', function() {
    spandukResponsive.classList.toggle('muncul');
});