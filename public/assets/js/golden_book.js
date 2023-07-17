
const commentWrittingBackground = document.querySelector('.commentWrittingBackground');
const message = document.querySelector('#commentaryForm small');




const displayComment = () => {
    commentWrittingBackground.classList.toggle('d-none');

}

const send = (event) => {
    event.preventDefault();

    if (commentary.value != '') {
        commentaryForm.submit();
    } else {
        message.textContent = 'Veuillez rédiger un commentaire avant d\'envoyer.';
    }
}




writeComment.addEventListener('click', displayComment);

sendCommentary.addEventListener('click', send);