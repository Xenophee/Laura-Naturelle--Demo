
const REGEX_EMAIL = new RegExp(email.pattern);
const REGEX_PHONE = new RegExp(phone.pattern);
const REGEX_STREET = new RegExp(street.pattern);
const REGEX_ZIPCODE = new RegExp(zipcode.pattern);
const REGEX_CITY = new RegExp(city.pattern);
const REGEX_PASSWORD = new RegExp(newPassword.pattern);

const account = document.getElementById('account-form');
const messages = { email: 'une adresse mail', phone: 'un numéro de téléphone', street: 'une rue', zipcode: 'un code postal', city: 'une ville', newPassword: 'un mot de passe'};


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

        if (input.required == true) {
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
// FONCTION DE VÉRIFICATION SUR LE MOT DE PASSE

const checkPassword = () => {
    if (newPassword.value != '') {
        if (newPassword.value != confirmPassword.value) {
            errorDisplay(confirmPassword);
            confirmPasswordError.textContent = 'Les deux mots de passe ne sont pas identiques.'
        } else {
            errorRemove(confirmPassword);
        };
    } else {
        errorRemove(confirmPassword);
    };
};



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// ÉVÉNEMENTS SUR LE FORMULAIRE

email.addEventListener('change', () => {
    checkInput(email, REGEX_EMAIL);
});

phone.addEventListener('change', () => {
    checkInput(phone, REGEX_PHONE);
});

street.addEventListener('change', () => {
    checkInput(street, REGEX_STREET);
});

zipcode.addEventListener('change', () => {
    checkInput(zipcode, REGEX_ZIPCODE);
});

city.addEventListener('change', () => {
    checkInput(city, REGEX_CITY);
});

newPassword.addEventListener('change', () => {
    checkInput(newPassword, REGEX_PASSWORD);
});

confirmPassword.addEventListener('change', checkPassword);



account.addEventListener('submit', (event) => {
    console.log('oui');
    event.preventDefault();

    checkInput(email, REGEX_EMAIL);
    checkInput(phone, REGEX_PHONE);
    checkInput(street, REGEX_STREET);
    checkInput(zipcode, REGEX_ZIPCODE);
    checkInput(city, REGEX_CITY);
    checkInput(newPassword, REGEX_PASSWORD);
    checkPassword();


});

