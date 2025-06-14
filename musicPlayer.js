const musicPlayer = {
  songs: [
    "https://www.youtube.com/watch?v=ssVCtZBQyus",
    "https://youtu.be/mm29aBe71SI?si=3P_AcZ0jZb7mcRs2",
    "https://youtu.be/nP8ZVJxiJlU?si=mDvCgd-e93pcWumS",
    "https://youtu.be/6SHIrbtXY1U?si=UEzcSUUzHNjFI7KU",
    "https://youtu.be/dTbONq0zxRA?si=j7FKiWa9Ts-hQ2Do",
    "https://youtu.be/XQ0D_QD_DhM?si=jwr_mIG-zZwSPk-S"
  ],
  currentSongIndex: 0,
  audioPlayer: document.getElementById("audioPlayer"),

  playPause: function() {
    if (this.audioPlayer.paused) {
      this.audioPlayer.play();
    } else {
      this.audioPlayer.pause();
    }
  },

  next: function() {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.audioPlayer.src = this.songs[this.currentSongIndex];
    this.audioPlayer.play();
  },

  previous: function() {
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    this.audioPlayer.src = this.songs[this.currentSongIndex];
    this.audioPlayer.play();
  },

  setVolume: function(value) {
    this.audioPlayer.volume = value / 100;
  },

  init: function() {
    this.audioPlayer.src = this.songs[this.currentSongIndex];
  }
};

document.getElementById("playPauseButton").addEventListener("click", function() {
  musicPlayer.playPause();
});

document.getElementById("nextButton").addEventListener("click", function() {
  musicPlayer.next();
});

document.getElementById("previousButton").addEventListener("click", function() {
  musicPlayer.previous();
});

document.getElementById("volumeControl").addEventListener("input", function(event) {
  musicPlayer.setVolume(event.target.value);
});

// Initialize the player with the first song
musicPlayer.init();
