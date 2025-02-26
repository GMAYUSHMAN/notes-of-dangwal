// Function to play sound on button click
function playSound() {
  const audio = document.getElementById('buttonSound');
  audio.play();
}

// Function to show the main app page
function showAppPage() {
  document.getElementById('authPage').style.display = 'none';
  document.getElementById('appPage').style.display = 'block';
}

// Function to handle login
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username && password) {
    playSound();
    showAppPage();
  } else {
    alert('Please enter username and password.');
  }
}

// Function to handle signup
function signup() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username && password) {
    playSound();
    showAppPage();
  } else {
    alert('Please enter username and password.');
  }
}

// Function to create a new folder
function createFolder() {
  const folderContainer = document.querySelector('.folder-container');
  const folder = document.createElement('div');
  folder.className = 'folder';
  folder.innerHTML = `
    <i class="fas fa-folder"></i>
    <span>New Folder</span>
  `;
  folderContainer.appendChild(folder);

  // Add click event to open folder
  folder.addEventListener('click', () => openFolder('New Folder'));
}

// Function to open folder modal
function openFolder(folderName) {
  const modal = document.getElementById('folderModal');
  const folderNameElement = document.getElementById('folderName');
  folderNameElement.textContent = folderName;
  modal.style.display = 'flex';
}

// Function to close folder modal
function closeModal() {
  const modal = document.getElementById('folderModal');
  modal.style.display = 'none';
}

// Function to upload file
function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const fileList = document.getElementById('fileList');

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const fileLink = document.createElement('a');
    fileLink.href = URL.createObjectURL(file);
    fileLink.textContent = file.name;
    fileLink.target = '_blank';
    fileList.appendChild(fileLink);
  }
}

// Fade out effect when leaving the page
window.addEventListener('beforeunload', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 3s ease';
});