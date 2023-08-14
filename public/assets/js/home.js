
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

const images = ["./public/assets/img/illustrations/modelage.jpg", "./public/assets/img/illustrations/pieds.jpg", "./public/assets/img/illustrations/visage.jpg", "./public/assets/img/illustrations/epilations.jpg", "./public/assets/img/illustrations/mains.jpg", "./public/assets/img/illustrations/maquillage.jpg"];
let currentIndex = 0; // Index de l'image actuellement affichée
const image = document.querySelector('.services-index-img');


// Fonction pour changer l'image toutes les X millisecondes
function changeImage() {

    image.style.opacity = 0;

    setTimeout(function () {
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
        image.style.opacity = 1;
    }, 1000);
}

// 1000 = 1s
setInterval(changeImage, 8000);

