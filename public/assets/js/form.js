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


// ----------------------------------------------------------------------------------------------
// FONCTION DE COMPTAGE SUR lES TEXTAREA

const counterLenght = (textarea, value) => {

    let content = textarea.value.length;
        
    counterChar.textContent = value - content;
    
    // Ajout d'un message d'erreur en cas de dépassement
    if (Number(counterChar.textContent) < 0) {
        textareaMessage.textContent = 'Vous avez dépassé le nombre de caractères autorisés.';
    } else {
        textareaMessage.textContent = '';
    };

};




// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FORMULAIRE D'ANNONCE

const announcement = document.getElementById('announcement-form');

if (announcement != undefined) {

    const typeChoices = document.querySelectorAll('.type-choice');
    const inputBlock = document.querySelectorAll('.input-block');
    const textarea = document.querySelector('textarea');
    const value = Number(counterChar.textContent);
    const modalBtn = document.querySelector('.modal-footer .btn-outline');

    // ----------------------------------------------------------------------
    // Fonction d'affichage du formulaire nécessaire
    const displayForm = (element) => {

        if (element.checked && element.value == 1) {
            // Affichage pour les absences
            inputBlock[1].classList.remove('d-none');
            inputBlock[2].classList.remove('d-none');
        } else if (element.checked && element.value == 2) {
            // Affichage pour les promotions
            inputBlock[0].classList.remove('d-none');
            inputBlock[1].classList.remove('d-none');
            inputBlock[2].classList.remove('d-none');
        } else if (element.checked && element.value == 3) {
            // Affichage pour les messages personnalisés
            inputBlock[1].classList.remove('d-none');
        };
    };
    // ----------------------------------------------------------------------

    // ----------------------------------------------------------------------
    // En cas d'annulation de la suppression de l'annonce, retour du check sur le bouton modifier
    displayModal.addEventListener('hidden.bs.modal', () => {
        modify.checked = true;
    });
    // ----------------------------------------------------------------------
    
    // ----------------------------------------------------------------------
    // Fait le décompte du nombre de caractères sur le textarea et affiche le message d'erreur
    textarea.addEventListener('keydown', () => {
        counterLenght(textarea, value);
    });

    // Appel de la fonction de comptage au démarrage pour pallier les cas de modification
    counterLenght(textarea, value);
    // ----------------------------------------------------------------------
    
    // ----------------------------------------------------------------------
    // Affichage du formulaire adapté en fonction du bouton cliqué
    typeChoices.forEach((element, key) => {

        displayForm(element);

        element.addEventListener('click', () => {

            // Réinitialise l'affichage à chaque click
            inputBlock.forEach(element => {
                element.classList.add('d-none');
            });

            displayForm(element);

        });
    });
    // ----------------------------------------------------------------------
};



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FORMULAIRE DE PRESTATION


const service = document.getElementById('service-form');

if (service != undefined) {

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
};