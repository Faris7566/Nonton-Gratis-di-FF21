document.addEventListener('DOMContentLoaded', () => {
    const movieCards = document.querySelectorAll('.movie-card');
    const modal = document.getElementById('modal');
    const videoPlayer = document.getElementById('video-player');
    const closeButton = document.querySelector('.close-button');

    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoSrc = card.getAttribute('data-video');
            videoPlayer.src = videoSrc;
            modal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.src = '';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            videoPlayer.pause();
            videoPlayer.src = '';
        }
    });
});
