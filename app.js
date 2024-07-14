document.addEventListener('DOMContentLoaded', function() {
    const movieCards = document.querySelectorAll('.movie-card');
    const modal = document.getElementById('modal');
    const videoPlayer = document.getElementById('video-player');
    const closeButton = document.querySelector('.close-button');

    movieCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoSrc = card.getAttribute('data-video');
            videoPlayer.src = videoSrc;
            modal.style.display = 'flex';
            videoPlayer.play();
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.src = '';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            videoPlayer.pause();
            videoPlayer.src = '';
        }
    });
});
