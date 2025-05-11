// Save profile picture to localStorage
function changeProfilePic(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageUrl = e.target.result;
      localStorage.setItem('profilePic', imageUrl);
      document.getElementById('profilePic').style.backgroundImage = `url('${imageUrl}')`;
      document.getElementById('profileAddIcon').classList.add('hidden');
    };
    reader.readAsDataURL(file);
  }
}

// Load profile picture from localStorage on page load
window.addEventListener('load', () => {
  const savedPic = localStorage.getItem('profilePic');
  if (savedPic) {
    document.getElementById('profilePic').style.backgroundImage = `url('${savedPic}')`;
    document.getElementById('profileAddIcon').classList.add('hidden');
  }

  const savedPosts = JSON.parse(localStorage.getItem('userPosts') || '[]');
  savedPosts.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.onclick = () => alert('Post popup goes here');
    document.getElementById('postGrid').appendChild(img);
    document.getElementById('createPostBtn').classList.add('hidden');
  });
});

// Save post to localStorage
function uploadPost(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageUrl = e.target.result;
      const posts = JSON.parse(localStorage.getItem('userPosts') || '[]');
      posts.push(imageUrl);
      localStorage.setItem('userPosts', JSON.stringify(posts));

      const img = document.createElement('img');
      img.src = imageUrl;
      img.onclick = () => alert('Post popup goes here');
      document.getElementById('postGrid').appendChild(img);
      document.getElementById('createPostBtn').classList.add('hidden');
    };
    reader.readAsDataURL(file);
  }
}