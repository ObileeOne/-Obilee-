<script>
  lucide.createIcons();

  const videos = document.querySelectorAll('video');

  // Observer to detect which video is in the viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play();  // Play when in view
      } else {
        video.pause(); // Pause when out of view
      }
    });
  }, { threshold: 0.6 }); // 60% of video must be visible to be considered 'in view'

  videos.forEach(video => {
    observer.observe(video);
  });

  // Function to toggle mute/unmute for each video
  function toggleMute(index) {
    const video = document.getElementById('videoElement' + index);
    const muteIcon = document.getElementById('muteIcon' + index);
    const muteButton = document.getElementById('muteButton' + index);

    if (video.muted) {
      video.muted = false;
      muteIcon.setAttribute("data-lucide", "volume-2");  // Speaker with sound waves for unmuted
    } else {
      video.muted = true;
      muteIcon.setAttribute("data-lucide", "volume-x");  // Speaker with X for muted
    }

    muteButton.classList.add('fade');
    lucide.createIcons(); // Refresh icon after change
  }
</script>