
// ==================================================================================================================================
// ----------------------------------------------------------------------------------------------------------------------------------
// AFFICHAGE DE LA CARTE

const latitude = 49.83763;
const longitude = 3.26675;

var map = L.map('map').setView([latitude, longitude], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([latitude, longitude]).addTo(map)
    .bindPopup('L\'aura Natur\'elle.')
    .openPopup();

    

// ==================================================================================================================================
// ----------------------------------------------------------------------------------------------------------------------------------
// MODIFICATION DYNAMIQUE DES IMAGES DE PRESTATIONS

const images = ["./public/assets/img/illustrations/prestations/modelage.jpg", "./public/assets/img/illustrations/prestations/epilations.jpg", "./public/assets/img/illustrations/prestations/corps.jpg", "./public/assets/img/illustrations/prestations/pieds.jpg", "./public/assets/img/illustrations/prestations/visage.jpg", "./public/assets/img/illustrations/prestations/mains.jpg"];
let currentIndex = 0; // Index de l'image actuellement affichée
const image = document.querySelector('.services-index-img');
const text = document.querySelector('.prestations-text-index');
const btn = document.querySelector('.btn-services-index');

// Fonction pour changer l'image toutes les X millisecondes
function changeImage() {

    text.classList.remove('darkmode');
    btn.classList.remove('darkmode');

    image.style.opacity = 0;

    setTimeout(function () {
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
        image.style.opacity = 1;

        if (currentIndex == 1 || currentIndex == 3 || currentIndex == 5) {
            text.classList.add('darkmode');
            btn.classList.add('darkmode');
        }
    }, 1000);
}

// 1000 = 1s
setInterval(changeImage, 8000);

