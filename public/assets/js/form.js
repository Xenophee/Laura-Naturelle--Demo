// ----------------------------------------------------------------------------------------------
// VISUALISATION DE L'IMAGE DANS UN INPUT FILE

const coverInput = document.getElementById('cover');
const coverPreview = document.querySelector('.cover');

coverInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        coverPreview.setAttribute('src', reader.result);
    });
    reader.readAsDataURL(file);
    }
});