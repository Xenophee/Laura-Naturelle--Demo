

import { messages, checkInput, errorDisplay, errorRemove, errorMessage, counterLenght } from './form.js';


const REGEX_EMAIL = new RegExp(email.pattern);


email.addEventListener('change', () => {
    checkInput(email, REGEX_EMAIL);
});