window.onload = function() {
  // Get the splash screen and main content elements
  const splashScreen = document.getElementById('splashScreen');
  const mainContent = document.getElementById('mainContent');

  // Show splash screen on page load
  splashScreen.classList.remove('hidden');
  
  // Simulate page loading delay (e.g., 2 seconds)
  setTimeout(function () {
    // Hide the splash screen and show the main content
    splashScreen.classList.add('hidden');
    mainContent.style.display = 'block';
  }, 2000); // Adjust this time as needed (2000ms = 2 seconds)

};

// Handle page navigation: show splash screen when leaving the page
window.addEventListener('beforeunload', function() {
  const splashScreen = document.getElementById('splashScreen');
  splashScreen.classList.remove('hidden');
});