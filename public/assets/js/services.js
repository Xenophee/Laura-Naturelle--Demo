

import { checkInput, errorDisplay, errorRemove, errorMessage, counterLenght } from './form.js';



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FORMULAIRE DE PRESTATION


const service = document.getElementById('service-form');

const textarea = document.querySelector('textarea');
const value = Number(counterChar.textContent);
const typeChoices = document.querySelectorAll('.type-choice');
const dates = document.querySelector('.special-dates');
const inputDates = document.querySelectorAll('.special-dates .form-control');

// ----------------------------------------------------------------------
// Fait le décompte du nombre de caractères sur le textarea et affiche le message d'erreur
textarea.addEventListener('keydown', () => {
    counterLenght(textarea, value);
});

// Appel de la fonction de comptage au démarrage pour pallier les cas de modification
counterLenght(textarea, value);
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// Affiche les dates à enregistrer en cas de prestation spéciale et les rends obligatoire
typeChoices.forEach(element => {
    element.addEventListener('click', () => {
        if (element.checked && element.value == 1) {
            dates.classList.remove('d-none');
            inputDates.forEach(element => {
                element.required = true;
            });

        } else {
            dates.classList.add('d-none');
            inputDates.forEach(element => {
                element.required = false;
            });
        };
    });
});
// ----------------------------------------------------------------------
