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
        }
    });

}


// ----------------------------------------------------------------------------------------------
// FONCTION DE COMPTAGE SUR lES TEXTAREA

const counterLenght = (textarea, value) => {

    let content = textarea.value.length;
        
    counterChar.textContent = value - content;
    
    if (Number(counterChar.textContent) < 0) {
        textareaMessage.textContent = 'Vous avez dépasser le nombre de caractères autorisés.';
    } else {
        textareaMessage.textContent = '';
    }

}





// ----------------------------------------------------------------------------------------------
// FORMULAIRE D'ANNONCE

const announcement = document.getElementById('announcement-form');

if (announcement != undefined) {
    const typeChoices = document.querySelectorAll('.type-choice');
    const inputBlock = document.querySelectorAll('.input-block');
    const textarea = document.querySelector('textarea');
    const value = Number(counterChar.textContent);
    
    console.log(inputBlock);

    textarea.addEventListener('keydown', () => {
        counterLenght(textarea, value);
    })
    
    typeChoices.forEach((element, key) => {
        element.addEventListener('click', () => {

            inputBlock.forEach(element => {
                element.classList.add('d-none');
            });

            if (element.checked && key == 0) {
                inputBlock[1].classList.remove('d-none');
                inputBlock[2].classList.remove('d-none');
            } else if (element.checked && key == 1) {
                inputBlock[0].classList.remove('d-none');
                inputBlock[1].classList.remove('d-none');
                inputBlock[2].classList.remove('d-none');
            } else {
                inputBlock[1].classList.remove('d-none');
            }
        })
        
    });
}

