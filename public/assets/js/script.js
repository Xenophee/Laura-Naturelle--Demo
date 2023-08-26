

// Affichage de la liste des prestations dans la barre de navigation pour les grands écrans

if (window.innerWidth >= 1200) {

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

};