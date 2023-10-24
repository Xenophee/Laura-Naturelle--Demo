
const dataModal = {
    announcement: {
        deleteAll: { title: 'Supprimer toutes les anciennes annonces', content: 'Êtes vous certain de vouloir <strong>supprimer</strong> toutes les anciennes annonces ?' },
        delete: { title: 'Supprimer une ancienne annonce', content: 'Êtes vous certain de vouloir <strong>supprimer</strong> cette ancienne annonce ?' },
        deactivation: { title: 'Désactiver l\'annonce en cours', content: 'Êtes vous certain de vouloir <strong>désactiver</strong> l\'annonce en cours ?' }
    },
    service: {
        publishAll: { title: 'Publier une catégorie', content: 'Êtes vous certain de vouloir <strong>publier</strong> cette catégorie ?' },
        publish: { title: 'Publier une prestation', content: 'Êtes vous certain de vouloir <strong>publier</strong> cette prestation ?' },
        deleteAll: { title: 'Supprimer une catégorie', content: 'Êtes vous certain de vouloir <strong>supprimer</strong> cette catégories ainsi que toutes ses prestations ?' },
        delete: { title: 'Supprimer une prestation', content: 'Êtes vous certain de vouloir <strong>supprimer</strong> cette prestation ?' },
        deactivateAll: { title: 'Désactiver une catégorie', content: 'Êtes vous certain de vouloir <strong>désactiver</strong> cette catégorie ?' },
        deactivate: { title: 'Désactiver une prestation', content: 'Êtes vous certain de vouloir <strong>désactiver</strong> cette prestation ?' }
    },
    discount: {
        deleteAll: { title: 'Supprimer toutes les promotions', content: 'Êtes vous certain de vouloir <strong>supprimer</strong> toutes les promotions ?' },
        delete: { title: 'Supprimer une promotion', content: 'Êtes vous certain de vouloir <strong>supprimer</strong> cette promotion ?' }
    }
};


const h1 = document.querySelector('h1');

const publishBtns = document.querySelectorAll('.validate');
const deleteBtns = document.querySelectorAll('.delete');
const deactivateBtns = document.querySelectorAll('.deactivate');
const deactivation = document.getElementById('deactivation');

const modalTitle = document.querySelector('.modal-title');
const modaltext = document.querySelector('.modal-body p');



// ----------------------------------------------------------------------------------------------
// FONCTION DE CRÉATION DU CONTENU TEXTUEL DE LA MODAL

const createText = (action) => {

    let page = h1.textContent;

    switch (page) {
        case 'Mes annonces':
            page = 'announcement';
            break;
        case 'Liste des prestations':
            page = 'service';
            break;
        case 'Promotions':
            page = 'discount';
            break;
    }

    modalTitle.textContent = dataModal[page][action].title;
    modaltext.innerHTML = dataModal[page][action].content;
};



// ----------------------------------------------------------------------------------------------
// FONCTION DE CRÉATION DU LIEN

const createLink = (event, action) => {

    let id = event.target.dataset.id;
    let param = event.target.dataset.param;
    let method = event.target.dataset.method;

    let link;

    switch (action) {
        case 0:
            link = 'delete_controller.php';
            break;
        case 1:
            link = 'deactivate_controller.php';
            break;
        case 2:
            link = 'publish_controller.php';
            break;
    }

    link = (id) ? `${link}?id=${id}&param=${param}` : `${link}?param=${param}`;

    link = (method) ? `${link}&method=${method}` : link;

    controllerLink.setAttribute('href', link);
};




// ----------------------------------------------------------------------------------------------
// ÉVÉNEMENTS SUR LES BOUTONS CONCERNÉS

if (publishBtns != null) {
    for (const publishBtn of publishBtns) {
        publishBtn.addEventListener('click', (event) => {
            (publishBtn.classList.contains('validateAll')) ? createText('publishAll') : createText('publish');
            createLink(event, 2);
        });
    };
};

if (deleteBtns != null) {
    for (const deleteBtn of deleteBtns) {
        deleteBtn.addEventListener('click', (event) => {
            (deleteBtn.classList.contains('deleteAll')) ? createText('deleteAll') : createText('delete');
            createLink(event, 0);
        });
    };
};

if (deactivateBtns != null) {
    for (const deactivateBtn of deactivateBtns) {
        deactivateBtn.addEventListener('click', (event) => {
            (deactivateBtn.classList.contains('deactivateAll')) ? createText('deactivateAll') : createText('deactivate');
            createLink(event, 1);
        });
    };
};


if (deactivation != null) {
    deactivation.addEventListener('click', (event) => {
        modalTitle.textContent = dataModal.announcement.deactivation.title;
        modaltext.innerHTML = dataModal.announcement.deactivation.content;
        createLink(event, 1);
    });
};
