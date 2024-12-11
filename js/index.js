const texts = [
  "HELLO I'M CHAYANTAN BHATTACHARYYA",
  "I'M A FULLSTACK DEVELOPER",
  "Who loves building beautiful,"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
  if (charcterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
    charcterIndex++;
    setTimeout(typeWriter, speed);
  } else if (textIndex < texts.length - 1) {
    textIndex++;
    charcterIndex = 0;
    textElements.innerHTML += "<br>"; // Add a line break between lines
    setTimeout(typeWriter, 500);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = 0;
    charcterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

typeWriter();
//Preloader Logic
// const video = document.getElementById('intro-video');
// const videoContainer = document.getElementById('video-container');
// const mainContent = document.getElementById('main-content');

// video.addEventListener('ended', () => {
//   videoContainer.style.display = 'none'; // Hide the video container
//   mainContent.style.display = 'block'; // Show the main content
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const video = document.getElementById("intro-video");
//   const preloader = document.getElementById("video-preloader");
//   const mainContent = document.getElementById("main-content");

//   // When the video ends, hide the preloader and show the main content
//   video.addEventListener("ended", () => {
//     preloader.style.display = "none"; // Hide preloader
//     mainContent.style.display = "block"; // Show main content
//     typeWriter(); // Start the typewriter effect
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const introVideo = document.getElementById("intro-video");
//   const introContainer = document.getElementById("intro-video-container");
//   const mainContent = document.getElementById("main-content");

//   introVideo.onended = function () {
//     introContainer.style.display = "none"; // Hide the video container
//     mainContent.style.display = "block"; // Show the main content
//   };
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const introVideo = document.getElementById("intro-video");
//   const introAudio = document.getElementById("intro-audio");
//   const introContainer = document.getElementById("intro-video-container");
//   const mainContent = document.getElementById("main-content");

//   // Synchronize audio with video
//   introVideo.onplay = () => introAudio.play();
//   introVideo.onpause = () => introAudio.pause();

//   // When the video ends, stop audio and show main content
//   introVideo.onended = function () {
//     introAudio.pause();
//     introContainer.style.display = "none";
//     mainContent.style.display = "block";
//   };
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const introVideo = document.getElementById("intro-video");
//   const introAudio = document.getElementById("intro-audio");
//   introAudio.muted = false; // Unmute after autoplay starts
//   const introContainer = document.getElementById("intro-video-container");
//   const mainContent = document.getElementById("main-content");

//   // Ensure audio and video start together
//   introVideo.onplay = () => introAudio.play();
//   introVideo.onpause = () => introAudio.pause();

//   // Adjust audio playback rate to match video if needed
//   introVideo.ontimeupdate = () => {
//     if (Math.abs(introAudio.currentTime - introVideo.currentTime) > 0.3) {
//       introAudio.currentTime = introVideo.currentTime;
//     }
//   };

//   // Show main content when the video ends
//   introVideo.onended = function () {
//     introAudio.pause();
//     introContainer.style.display = "none";
//     mainContent.style.display = "block";
//   };
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const introVideo = document.getElementById("intro-video");
//   const introAudio = document.getElementById("intro-audio");
//   const introContainer = document.getElementById("intro-video-container");
//   const mainContent = document.getElementById("main-content");

//   // Unmute audio once the video starts
//   introVideo.onplay = () => {
//       introAudio.muted = false; // Unmute audio
//       introAudio.play();
//   };

//   // Pause audio with video
//   introVideo.onpause = () => introAudio.pause();

//   // Sync audio with video time
//   introVideo.ontimeupdate = () => {
//       if (Math.abs(introAudio.currentTime - introVideo.currentTime) > 0.3) {
//           introAudio.currentTime = introVideo.currentTime;
//       }
//   };

//   // Hide preloader after the video ends
//   introVideo.onended = function () {
//       introAudio.pause();
//       introContainer.style.display = "none";
//       mainContent.style.display = "block";
//   };
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const introVideo = document.getElementById("intro-video");
//   const introAudio = document.getElementById("intro-audio");
//   const introContainer = document.getElementById("intro-video-container");
//   const mainContent = document.getElementById("main-content");

//   // Unmute audio once the video starts
//   introVideo.onplay = () => {
//       introAudio.muted = false; // Unmute audio
//       introAudio.play();
//   };

//   // Pause audio with video
//   introVideo.onpause = () => introAudio.pause();

//   // Sync audio with video time
//   introVideo.ontimeupdate = () => {
//       if (Math.abs(introAudio.currentTime - introVideo.currentTime) > 0.3) {
//           introAudio.currentTime = introVideo.currentTime;
//       }
//   };

//   // Hide preloader after the video ends
//   introVideo.onended = function () {
//       introAudio.pause();
//       introContainer.style.display = "none";
//       mainContent.style.display = "block";
//   };
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const introVideo = document.getElementById("intro-video");
//   const introAudio = document.getElementById("intro-audio");
//   const introContainer = document.getElementById("intro-video-container");
//   const mainContent = document.getElementById("main-content");

//   // Function to enable audio playback
//   function enableAudio() {
//       introAudio.muted = false; // Unmute audio
//       introAudio.play();
//       document.removeEventListener("click", enableAudio); // Remove listener after first click
//   }

//   // Listen for the user's first interaction
//   document.addEventListener("click", enableAudio);

//   // Sync video with audio
//   introVideo.onplay = () => {
//       introAudio.play();
//   };
//   introVideo.onpause = () => {
//       introAudio.pause();
//   };

//   // Ensure video and audio are in sync
//   introVideo.ontimeupdate = () => {
//       if (Math.abs(introAudio.currentTime - introVideo.currentTime) > 0.3) {
//           introAudio.currentTime = introVideo.currentTime;
//       }
//   };

//   // Hide video container and show main content after video ends
//   introVideo.onended = function () {
//       introAudio.pause();
//       introContainer.style.display = "none";
//       mainContent.style.display = "block";
//   };
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const introVideo = document.getElementById("intro-video");
//   const introAudio = document.getElementById("intro-audio");
//   const introContainer = document.getElementById("intro-video-container");
//   const mainContent = document.getElementById("main-content");
//   const volumeToggle = document.getElementById("volume-toggle");

//   // Enable audio on first interaction
//   function enableAudio() {
//     introAudio.muted = false;
//     introAudio.play();
//     document.removeEventListener("click", enableAudio);
//   }

//   document.addEventListener("click", enableAudio);

//   // Sync video and audio
//   introVideo.onplay = () => introAudio.play();
//   introVideo.onpause = () => introAudio.pause();

//   introVideo.ontimeupdate = () => {
//     if (Math.abs(introAudio.currentTime - introVideo.currentTime) > 0.3) {
//       introAudio.currentTime = introVideo.currentTime;
//     }
//   };

//   // Hide video container and show main content after video ends
//   introVideo.onended = function () {
//     introAudio.pause();
//     introContainer.style.display = "none";
//     mainContent.style.display = "block";
//   };

//   // Volume button toggle functionality
//   volumeToggle.addEventListener("click", () => {
//     if (introAudio.muted) {
//       introAudio.muted = false;
//       volumeToggle.textContent = "🔊"; // Update button icon
//     } else {
//       introAudio.muted = true;
//       volumeToggle.textContent = "🔇"; // Update button icon
//     }
//   });
// });





document.addEventListener("DOMContentLoaded", function () {
  const introVideo = document.getElementById("intro-video");
  const introAudio = document.getElementById("intro-audio");
  const introContainer = document.getElementById("intro-video-container");
  const mainContent = document.getElementById("main-content");
  const volumeToggle = document.getElementById("volume-toggle");

  const videoDuration = 10; // 6 seconds video/audio duration

  // Enable audio on first interaction
  function enableAudio() {
    introAudio.muted = false;
    introAudio.play();
    introVideo.muted = false;
    introVideo.play();
    document.removeEventListener("click", enableAudio);
  }

  document.addEventListener("click", enableAudio);

  // Sync video and audio
  introVideo.onplay = () => introAudio.play();
  introVideo.onpause = () => introAudio.pause();

  // Check when to stop video and audio after 6 seconds
  introVideo.ontimeupdate = () => {
    // Stop playback after 6 seconds
    if (introVideo.currentTime >= videoDuration) {
      introVideo.pause();
      introAudio.pause();
      introContainer.style.display = "none";
      mainContent.style.display = "block"; // Show main content after 6 seconds
    }

    // Sync audio and video
    if (Math.abs(introAudio.currentTime - introVideo.currentTime) > 0.3) {
      introAudio.currentTime = introVideo.currentTime;
    }
  };

  // Hide video container and show main content after video ends
  introVideo.onended = function () {
    introAudio.pause();
    introContainer.style.display = "none";
    mainContent.style.display = "block";
  };

  // Volume button toggle functionality
  volumeToggle.addEventListener("click", () => {
    if (introAudio.muted) {
      introAudio.muted = false;
      introVideo.muted = false; // Unmute video as well
      volumeToggle.textContent = "🔊"; // Update button icon
    } else {
      introAudio.muted = true;
      introVideo.muted = true; // Mute video as well
      volumeToggle.textContent = "🔇"; // Update button icon
    }
  });
});
