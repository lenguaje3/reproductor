let audio = document.getElementById('audio');
let playPauseBtn = document.getElementById('playPauseBtn');
let progressBar = document.getElementById('progressBar');
let currentTimeElement = document.getElementById('currentTime');
let totalTimeElement = document.getElementById('totalTime');
let albumCover = document.getElementById('albumCover');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '🐈';
        albumCover.style.animation = 'rotation 4s infinite linear';
    } else {
        audio.pause();
        playPauseBtn.textContent = '🐈‍⬛';
        albumCover.style.animation = 'none';
    }
}



