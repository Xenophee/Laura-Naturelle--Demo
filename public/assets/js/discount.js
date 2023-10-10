

// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FORMULAIRE DE PROMOTION

const discount = document.getElementById('discount-form');

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
