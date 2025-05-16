const currentPlayer = sessionStorage.getItem('isPlaying');

const begPlayerName = document.getElementById('begPlayerName');

console.log(begPlayerName, currentPlayer)

begPlayerName.textContent = currentPlayer;