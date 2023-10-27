

// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FORMULAIRE DE PROMOTION

const discount = document.getElementById('discount-form');

const servicesBtns = document.querySelectorAll('input[name="whichServices"]');


for (const servicesBtn of servicesBtns) {
    servicesBtn.addEventListener('input', () => {
        if (servicesBtn.value == 2) {
            servicesAccordion.classList.remove('d-none');
        } else {
            servicesAccordion.classList.add('d-none');
        };
    });
};
