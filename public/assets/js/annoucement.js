


import { messages, checkInput, errorDisplay, errorRemove, errorMessage, counterLenght } from './form.js';



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FORMULAIRE D'ANNONCE

const announcement = document.getElementById('announcement-form');

const textarea = document.querySelector('textarea');
const textareaBtn = document.querySelector('.formatting');
const modalBtn = document.querySelector('.modal-footer .btn-outline');


const previewText = () => {
    preview.innerHTML = textarea.value;
}

// ----------------------------------------------------------------------
// En cas d'annulation de la suppression de l'annonce, retour du check sur le bouton modifier
displayModal.addEventListener('hidden.bs.modal', () => {
    modify.checked = true;
});
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// Fait le décompte du nombre de caractères sur le textarea et affiche le message d'erreur
textarea.addEventListener('keydown', () => {
    counterLenght(textarea);
});

// Appel de la fonction de comptage au démarrage pour pallier les cas de modification
counterLenght(textarea);
// ----------------------------------------------------------------------

textarea.addEventListener('input', () => {
    previewText();
});

previewText();

// ----------------------------------------------------------------------

textareaBtn.addEventListener('click', () => {
    const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    const textBefore = textarea.value.substring(0, textarea.selectionStart);
    const textAfter = textarea.value.substring(textarea.selectionEnd);

    let newText = `<span>${selectedText}</span>`;

    textarea.value = textBefore + newText + textAfter;
    preview.innerHTML = textBefore + newText + textAfter;
})
// ----------------------------------------------------------------------
