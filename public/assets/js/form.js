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
        
    if (value != undefined) {
        counterChar.textContent = value - content;
        
        // Ajout d'un message d'erreur en cas de dépassement
        if (Number(counterChar.textContent) < 0) {
            textareaMessage.textContent = 'Vous avez dépassé le nombre de caractères autorisés.';
        } else {
            textareaMessage.textContent = '';
        };
    } else {
        counterChar.textContent = content;
    };

};



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FORMULAIRE D'ANNONCE

const announcement = document.getElementById('announcement-form');

if (announcement != undefined) {

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
};


// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FORMULAIRE DE PROMOTION

const discount = document.getElementById('discount-form');

if (discount != undefined) {

    const servicesBtn = document.querySelectorAll('input[name="whichServices"]');
    
    servicesBtn.forEach((element, key) => {
        element.addEventListener('click', () => {
            if (key == 1) {
                servicesAccordion.classList.remove('d-none');
            } else {
                servicesAccordion.classList.add('d-none');
            }
        })
    });
}


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