
import { messages, checkInput, errorDisplay, errorRemove, errorMessage, counterLenght } from './form.js';


const REGEX_EMAIL = new RegExp(email.pattern);
const REGEX_PHONE = new RegExp(phone.pattern);
const REGEX_ADDRESS = new RegExp(address.pattern);
const REGEX_ZIPCODE = new RegExp(zipcode.pattern);
const REGEX_CITY = new RegExp(city.pattern);
const REGEX_PASSWORD = new RegExp(newPassword.pattern);




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

address.addEventListener('change', () => {
    checkInput(address, REGEX_ADDRESS);
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


