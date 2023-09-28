

// ==============================================================================================
// ----------------------------------------------------------------------------------------------
// FORMULAIRE DES HORAIRES

const shedules = document.getElementById('schedules-form');

const scheduleBtnGroup = document.querySelectorAll('.schedule-btn-group');
const first_schedules = document.querySelectorAll('.schedules-first-bloc');
const second_schedules = document.querySelectorAll('.schedules-second-bloc');

const closeHour = document.getElementById('');


const displayForm = (value, index) => {

    let first_schedulesInputs = first_schedules[index].querySelectorAll('.schedules-first-bloc input');
    let firstHourInputs = [first_schedulesInputs[0], first_schedulesInputs[2]];

    let second_schedulesInputs = second_schedules[index].querySelectorAll('.schedules-second-bloc input');
    let secondHourInputs = [second_schedulesInputs[0], second_schedulesInputs[2]];

    let first_second_hour_input = first_schedulesInputs[2];
    let first_second_minute_input = first_schedulesInputs[3];

    let second_second_hour_input = second_schedulesInputs[2];
    let second_second_minute_input = second_schedulesInputs[3];

    class inputAttributes {
        constructor(id, name, value) {
            this.id = id;
            this.name = name;
            this.value = value;
        }
    }

    const close_mid_schedule = new inputAttributes();
    const close_schedule = new inputAttributes();
    
    let temp_id_close_hour = second_second_hour_input.id;
    let temp_name_close_hour = second_second_hour_input.name;
    let temp_value_close_hour = second_second_hour_input.value;

    let temp_id_close_minute = second_second_minute_input.id;
    let temp_name_close_minute = second_second_minute_input.name;
    let temp_value_close_minute = second_second_minute_input.value;

    first_schedules[index].classList.add('d-none');
    second_schedules[index].classList.add('d-none');

    firstHourInputs.forEach(element => {
        element.required = false;
        element.setAttribute('aria-required', 'false');
    });
    secondHourInputs.forEach(element => {
        element.required = false;
        element.setAttribute('aria-required', 'false');
    });


    if (value == 1 || value == 2) {

        first_schedules[index].classList.remove('d-none');

        firstHourInputs.forEach(element => {
            element.required = true;
            element.setAttribute('aria-required', 'true');
        });

        if (value == 1) {

            second_second_hour_input.id = first_second_hour_input.id;
            second_second_hour_input.name = first_second_hour_input.name;
            second_second_hour_input.value = first_second_hour_input.value;

            second_second_minute_input.id = first_second_minute_input.id;
            second_second_minute_input.name = first_second_minute_input.name;
            second_second_minute_input.value = first_second_minute_input.value;

            first_second_hour_input.id = temp_id_close_hour;
            first_second_hour_input.name = temp_name_close_hour;
            first_second_hour_input.value = temp_value_close_hour;

            first_second_minute_input.id = temp_id_close_minute;
            first_second_minute_input.name = temp_name_close_minute;
            first_second_minute_input.value = temp_value_close_minute;
            
        } else if (value == 2) {

            second_schedules[index].classList.remove('d-none');

            secondHourInputs.forEach(element => {
                element.required = true;
                element.setAttribute('aria-required', 'true');
            });

            first_second_hour_input.id = temp_id_hour;
            first_second_hour_input.name = temp_name_hour;
            first_second_hour_input.value = temp_value_hour;

            first_second_minute_input.id = temp_id_minute;
            first_second_minute_input.name = temp_name_minute;
            first_second_minute_input.value = temp_value_minute;
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

