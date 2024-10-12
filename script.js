const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trackTitle = document.getElementById('track-title');

let trackList = [
    { title: 'Track 1', src: 'song 1.mp3' },
    { title: 'Track 2', src: 'song 2.mp3' },
    { title: 'Track 3', src: 'song 3.mp3' },
    { title: 'Track 3', src: 'song 4.mp3' },
    { title: 'Track 3', src: 'song 5.mp3' },

];

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = trackList[index];
    audio.src = track.src;
    trackTitle.textContent = track.title;
}

function playTrack() {
    audio.play();
    playButton.textContent = 'Pause';
}

function pauseTrack() {
    audio.pause();
    playButton.textContent = 'Play';
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});

prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

// Autoplay next track when the current track ends
audio.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

// Load the first track on startup
loadTrack(currentTrackIndex);
