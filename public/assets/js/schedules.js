

// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// VARIABLES

const shedules = document.getElementById('schedules-form');

const scheduleBtnGroup = document.querySelectorAll('.schedule-btn-group');
const firstSchedules = document.querySelectorAll('.schedules-first-bloc');
const secondSchedules = document.querySelectorAll('.schedules-second-bloc');

const closeMidHour = document.querySelectorAll('.close-mid-hour');
const closeHour = document.querySelectorAll('.close-hour');



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FONCTION D'AFFICHAGE DU FORMULAIRE

const displayForm = (value, index) => {

    // -----------------------------------------------------
    // Place les inputs dans le bon ordre selon que le jour est sans interruption ou non
    if (value == 1) {
        firstSchedules[index].insertBefore(closeHour[index], null);
        secondSchedules[index].insertBefore(closeMidHour[index], null);
        
    } else if (value == 2) {
        firstSchedules[index].insertBefore(closeMidHour[index], null);
        secondSchedules[index].insertBefore(closeHour[index], null);
    }
    // -----------------------------------------------------

    // -----------------------------------------------------
    // Sélection des inputs après la mise en ordre
    let firstSchedulesInputs = firstSchedules[index].querySelectorAll('.schedules-first-bloc input');
    let firstHourInputs = [firstSchedulesInputs[0], firstSchedulesInputs[2]];

    let secondSchedulesInputs = secondSchedules[index].querySelectorAll('.schedules-second-bloc input');
    let secondHourInputs = [secondSchedulesInputs[0], secondSchedulesInputs[2]];
    // -----------------------------------------------------


    // -----------------------------------------------------
    // Reset la mise en page
    firstSchedules[index].classList.add('d-none');
    secondSchedules[index].classList.add('d-none');

    for(const firstHourInput of firstHourInputs) {
        firstHourInput.required = false;
        firstHourInput.setAttribute('aria-required', 'false');
    }
    for(const secondHourInput of secondHourInputs) {
        secondHourInput.required = false;
        secondHourInput.setAttribute('aria-required', 'false');
    }
    // -----------------------------------------------------

    
    // -----------------------------------------------------
    // Rends les inputs obligatoires selon que le jour est sans interruption ou non
    if (value == 1 || value == 2) {

        firstSchedules[index].classList.remove('d-none');

        for(const firstHourInput of firstHourInputs) {
            firstHourInput.required = true;
            firstHourInput.setAttribute('aria-required', 'true');
        }

        if (value == 2) {

            secondSchedules[index].classList.remove('d-none');

            for(const secondHourInput of secondHourInputs) {
                secondHourInput.required = true;
                secondHourInput.setAttribute('aria-required', 'true');
            }

        };
    };
    // -----------------------------------------------------
};



// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// LANCEMENT DE LA FONCTION DISPLAYFORM AU LANCEMENT DE LA PAGE ET AU CHANGEMENT DE STATUT DES HORAIRES

scheduleBtnGroup.forEach((element, index) => {

    let scheduleBtns = element.querySelectorAll('.scheduleBtn');

    for(const btn of scheduleBtns) {

        if (btn.checked) {
            displayForm(Number(btn.value), index);
        }

        btn.addEventListener('change', () => {
            displayForm(Number(btn.value), index);
        });
    };

});

