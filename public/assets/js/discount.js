

// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FORMULAIRE DE PROMOTION

const discount = document.getElementById('discount-form');

const servicesBtns = document.querySelectorAll('input[name="whichServices"]');



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// Affiche les accordéons de prestations en cas de choix ciblés

const displayServices = () => {

    for (const servicesBtn of servicesBtns) {

        if (servicesBtn.checked && servicesBtn.value == 2) {
            servicesAccordion.classList.remove('d-none');
        } else {
            servicesAccordion.classList.add('d-none');
        };
    };
};


displayServices();


for (const servicesBtn of servicesBtns) {
    servicesBtn.addEventListener('click', displayServices);
};
// ----------------------------------------------------------------------