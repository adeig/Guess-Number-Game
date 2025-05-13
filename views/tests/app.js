const body = document.body;
const starter = document.getElementById('starter');

const starting = function() {
  body.style.backgroundSize = `100%`;
}

//NAME FORM ENTRIES


const username = document.getElementById('username');
const playerName = document.getElementById('playerName');

// ➕ Récupérer le nom depuis sessionStorage au chargement
const sessionPlayerName = sessionStorage.getItem('sessionPlayerName');

if (sessionPlayerName) {
  playerName.textContent = sessionPlayerName;
}

document.getElementById("nameForm").addEventListener("submit", function(e) {
  e.preventDefault(); // ✋ STOP FORM SENDING

  const currentPlayer = username.value.trim(); // on enlève les espaces inutiles

  if (currentPlayer !== "") {
    playerName.textContent = currentPlayer;
    sessionStorage.setItem('sessionPlayerName', currentPlayer);
  }
});

