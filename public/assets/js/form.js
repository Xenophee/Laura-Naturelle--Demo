


const messages = { email: 'une adresse mail', phone: 'un numéro de téléphone', address: 'une rue', zipcode: 'un code postal', city: 'une ville', newPassword: 'un mot de passe'};


// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FONCTION D'AFFICHAGE D'ERREUR DANS LE FORMULAIRE (modification des classes)

const errorDisplay = (input) => {
    let message = document.getElementById(`${input.id}Error`);
    input.classList.add('error-form');
    message.classList.remove('d-none');
};


// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FONCTION DE RETRAIT D'ERREUR DANS LE FORMULAIRE (modification des classes)

const errorRemove = (input) => {
    let message = document.getElementById(`${input.id}Error`);
    input.classList.remove('error-form');
    message.classList.add('d-none');
};


// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FONCTION DE PERSONNALISATION DU MESSAGE D'ERREUR

const errorMessage = (input, empty = false) => {

    let message = document.getElementById(`${input.id}Error`);

    if (empty) {
        message.textContent = `Veuillez saisir ${messages[input.id]}.`;
    } else {
        message.textContent = `Veuillez saisir ${messages[input.id]} valide.`;
    };
};


// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FONCTION DE VÉRIFICATION POUR UN INPUT DU FORMULAIRE

const checkInput = (input, regex) => {

    if (input.value == '') {

        if (input.required) {
            errorDisplay(input);
            errorMessage(input, true);
        } else {
            errorRemove(input);
        };
        

    } else if (!regex.test(input.value)) {

        errorDisplay(input);
        errorMessage(input);
        
    } else {

        errorRemove(input);
    };
};


// ==============================================================================================
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



export { messages, errorDisplay, errorRemove, errorMessage, checkInput, counterLenght };





