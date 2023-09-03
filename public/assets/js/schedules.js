

// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FORMULAIRE DES HORAIRES

const shedules = document.getElementById('schedules-form');

const scheduleBtnGroup = document.querySelectorAll('.schedule-btn-group');
const firstBloc = document.querySelectorAll('.schedules-first-bloc');
const secondBloc = document.querySelectorAll('.schedules-second-bloc');



const displayForm = (value, index) => {
    
    
    let firstBlocInputs = firstBloc[index].querySelectorAll('.schedules-first-bloc input');
    let firstHourInputs = [firstBlocInputs[0], firstBlocInputs[2]];

    let secondBlocInputs = secondBloc[index].querySelectorAll('.schedules-second-bloc input');
    let secondHourInputs = [secondBlocInputs[0], secondBlocInputs[2]];

    firstBloc[index].classList.add('d-none');
        secondBloc[index].classList.add('d-none');
    
        firstHourInputs.forEach(element => {
            element.required = false;
            element.setAttribute('aria-required', 'false');
        });
        secondHourInputs.forEach(element => {
            element.required = false;
            element.setAttribute('aria-required', 'false');
        });


    if (value == 1 || value == 2) {
        firstBloc[index].classList.remove('d-none');
        firstHourInputs.forEach(element => {
            element.required = true;
            element.setAttribute('aria-required', 'true');
        });

        if (value == 2) {
            secondBloc[index].classList.remove('d-none');
            secondHourInputs.forEach(element => {
                element.required = true;
                element.setAttribute('aria-required', 'true');
            });
        };
    };
};




scheduleBtnGroup.forEach((element, index) => {

    let scheduleBtns = element.querySelectorAll('.scheduleBtn');

    scheduleBtns.forEach(element => {

        if (element.checked) {
            displayForm(Number(element.value), index);
        }
        
        element.addEventListener('change', () => {
            displayForm(Number(element.value), index);
        });
    });

});

