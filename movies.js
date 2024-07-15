document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const videoContainer = document.getElementById('video-container');
    const closeButton = document.querySelector('.close-button');

    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', function () {
            const videoSrc = this.parentElement.parentElement.getAttribute('data-video');
            if (videoSrc.includes('drive.google.com')) {
                videoContainer.innerHTML = `<iframe src="${videoSrc}" width="640" height="480" frameborder="0" allowfullscreen></iframe>`;
            } else {
                videoContainer.innerHTML = `<video controls autoplay><source src="${videoSrc}" type="video/mp4">Your browser does not support the video tag.</video>`;
            }
            modal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        videoContainer.innerHTML = '';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            videoContainer.innerHTML = '';
        }
    });
});
