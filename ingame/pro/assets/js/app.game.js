const currentPlayer = sessionStorage.getItem('isPlaying');

const proPlayerName = document.getElementById('proPlayerName');

console.log(proPlayerName, currentPlayer)

proPlayerName.textContent = currentPlayer;