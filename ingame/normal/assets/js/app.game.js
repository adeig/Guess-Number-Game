const currentPlayer = sessionStorage.getItem('isPlaying');

const medPlayerName = document.getElementById('medPlayerName');

console.log(medPlayerName, currentPlayer)

medPlayerName.textContent = currentPlayer;