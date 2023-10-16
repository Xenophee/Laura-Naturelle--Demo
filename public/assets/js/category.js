

import { checkInput, errorDisplay, errorRemove, errorMessage, counterLenght } from './form.js';

const REGEX_TEXT = new RegExp(title.pattern);

const textarea = document.querySelector('textarea');
const maxChar = counterChar.textContent;


// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// VISUALISATION DE L'IMAGE DANS UN INPUT FILE

const coverInput = document.getElementById('cover');
const coverPreview = document.querySelector('.cover');

if (coverInput != undefined) {
    
    coverInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            coverPreview.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(file);
        };
    });
};
// ----------------------------------------------------------------------



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// COMPTAGE DES CARACTÈRES DANS LE TEXTAREA

// Fait le décompte du nombre de caractères sur le textarea et affiche le message d'erreur
textarea.addEventListener('keydown', () => {
    counterLenght(textarea, maxChar);
});

// Appel de la fonction de comptage au démarrage pour pallier les cas de modification
counterLenght(textarea, maxChar);
// ----------------------------------------------------------------------



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// VÉRIFICATION DU FORMULAIRE

title.addEventListener('change', () => {
    checkInput(title, 'un titre de catégorie', REGEX_TEXT);
});