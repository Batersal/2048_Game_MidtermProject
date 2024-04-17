document.getElementById('customize-btn').addEventListener('click', function() {
    var customizeForm = document.getElementById('customize-form');
    if (customizeForm.style.display === 'none') {
      customizeForm.style.display = 'block';
    } else {
      customizeForm.style.display = 'none';
    }
  });

  document.getElementById('how-to-play-btn').addEventListener('click', function() {
    var howToPlay = document.getElementById('how-to-play');
    howToPlay.style.display = howToPlay.style.display === 'none' ? 'block' : 'none';
  });

  document.getElementById('close-how-to-play').addEventListener('click', function() {
    var howToPlay = document.getElementById('how-to-play');
    howToPlay.style.display = 'none';
  });

  document.getElementById('close-customize-form').addEventListener('click', function() {
    var customizeForm = document.getElementById('customize-form');
    customizeForm.style.display = 'none';
  });

  document.addEventListener('DOMContentLoaded', function() {
    var playerName = localStorage.getItem('playerName');
    var playerNameDisplay = document.getElementById('playerNameDisplay');
    if (playerName) {
      playerNameDisplay.textContent = playerName;
    }
  });