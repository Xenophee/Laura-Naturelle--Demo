

import { checkInput, errorDisplay, errorRemove, errorMessage, counterLenght } from './form.js';




const service = document.getElementById('service-form');

const textarea = document.querySelector('textarea');
const value = Number(counterChar.textContent);
const typeChoices = document.querySelectorAll('.type-choice');
const dates = document.querySelector('.exclusive-dates');
const inputDates = document.querySelectorAll('.exclusive-dates .form-control');




// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// Fait le décompte du nombre de caractères sur le textarea et affiche le message d'erreur
textarea.addEventListener('keydown', () => {
    counterLenght(textarea, value);
});

// Appel de la fonction de comptage au démarrage pour pallier les cas de modification
counterLenght(textarea, value);
// ----------------------------------------------------------------------



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// Affiche les dates à enregistrer en cas de prestation spéciale et les rends obligatoire

const displayDates = () => {

    for (const type of typeChoices) {

        if (type.checked && type.value == 1) {

            dates.classList.remove('d-none');
            for (const inputDate of inputDates) {
                inputDate.required = true;
            };

        } else {

            dates.classList.add('d-none');
            for (const inputDate of inputDates) {
                inputDate.required = false;
            };
        };
    };

};


displayDates();


for (const type of typeChoices) {
    type.addEventListener('click', displayDates);
};
// ----------------------------------------------------------------------



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// Ajoute une tarification

let count = 1;

const clone = () => {

    
    console.log(count);

    if (count == 3) {
        addError.classList.remove('d-none');
        return false;
    };

    count++;

    let cloned = pricing.cloneNode(true);
    cloned.id = cloned.id + count;


    let labels = cloned.querySelectorAll('label');
    console.log(labels);
    for (const label of labels) {
        label.setAttribute('for', label.getAttribute('for') + count);
    };

    let inputs = cloned.querySelectorAll('input');
    for (const input of inputs) {
        input.setAttribute('id', input.getAttribute('id') + count);
        input.setAttribute('name', input.getAttribute('name') + count);
    };

    let smalls = cloned.querySelectorAll('small');
    for (const small of smalls) {
        small.setAttribute('id', small.getAttribute('id') + count);
        small.setAttribute('aria-errormessage', small.getAttribute('aria-errormessage') + count);
    };

    pricings.append(cloned);

    deletePricing.classList.remove('d-none');
    deletePricing.addEventListener('click', deleteClone);
};


// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// Supprime une tarification

const deleteClone = () => {
    count--;

    if (count == 1) {
        deletePricing.classList.add('d-none');
    };

    addError.classList.add('d-none');

    let toDelete = document.querySelector('.pricing:last-child');
    toDelete.remove();
};




addPricing.addEventListener('click', clone);
