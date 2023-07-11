

const container = document.getElementById('lottieAnnouncement');

        const animation = lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: './public/assets/json/inbox-promos.json'
        });





const latitude = 49.83763;
const longitude = 3.26675;

var map = L.map('map').setView([latitude, longitude], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([latitude, longitude]).addTo(map)
    .bindPopup('L\'aura Natur\'elle.')
    .openPopup();