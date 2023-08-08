const dropdown = document.querySelector('.drop-menu');
const links = dropdown.querySelector('.drop-links');

let timeoutId;

dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Annuler tout délai en cours
    links.classList.remove('d-none');
});

dropdown.addEventListener('mouseleave', () => {
    // Cacher le contenu après un délai de 350 millisecondes
    timeoutId = setTimeout(() => {
        links.classList.add('d-none');
    }, 350);
});
