


const deleteBtns = document.querySelectorAll('.delete');
const deactivateBtns = document.querySelectorAll('.deactivate');
const deactivation = document.getElementById('deactivation');


// ----------------------------------------------------------------------------------------------
// FONCTION DE CRÉATION DU LIEN

const createLink = (event) => {

    let action = event.target.dataset.action;
    let id = event.target.dataset.id;
    let param = event.target.dataset.param;
    let method = event.target.dataset.method;

    let link = (action == 0) ? 'delete_controller.php' : 'deactivate_controller.php';

    link = (id) ? `${link}?id=${id}&param=${param}` : `${link}?param=${param}`;

    link = (method) ? `${link}&method=${method}` : link;

    controllerLink.setAttribute('href', link);
};




// ----------------------------------------------------------------------------------------------
// ÉVÉNEMENTS SUR LES BOUTONS CONCERNÉS

for (const deleteBtn of deleteBtns) {
    deleteBtn.addEventListener('click', (event) => {
        createLink(event);
    });
};

for (const deactivateBtn of deactivateBtns) {
    deactivateBtn.addEventListener('click', (event) => {
        createLink(event);
    });
};

deactivation.addEventListener('click', (event) => {
    createLink(event);
});
