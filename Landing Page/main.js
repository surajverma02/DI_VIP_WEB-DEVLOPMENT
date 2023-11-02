// Header background Change on scroll
let header = document.querySelector('nav')
window.addEventListener('scroll',() => {
    header.classList.toggle("shadow", window.scrollY > 0);
});
