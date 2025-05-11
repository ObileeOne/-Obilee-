// Handle the profile image click for animation and redirection
document.querySelector(".profile-image-container").addEventListener("click", function () {
  const profileImageContainer = this;
  const storyBorder = profileImageContainer.querySelector(".story-highlight-border");

  // Add the 'clicked' class to initiate the animation
  profileImageContainer.classList.add("clicked");

  // Wait for the animation to complete before redirecting (1 second to match the animation)
  setTimeout(function () {
    window.location.href = "user-stories.html"; // Redirect to user's stories page
  }, 1000); // This timeout should match the duration of the rotation animation
});