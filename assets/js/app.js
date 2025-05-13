// const body = document.body;
// const starter = document.getElementById('starter');

// const starting = function() {
//   body.style.backgroundSize = `100%`;
// }

// //NAME FORM ENTRIES


const body = document.body;
const starter = document.getElementById('starter');
const container = document.getElementById('container');

let containerLeft;

const starting = function() {
  body.style.backgroundSize = `100%`;

  containerLeft = `-100%`;
  container.style.left = containerLeft;

  containerLeft = `-200%`;
}

//NAME FORM ENTRIES


const username = document.getElementById('username');
const playerName = document.getElementById('playerName');
const userGreat = document.getElementById('userGreat');

// ➕ Récupérer le nom depuis sessionStorage au chargement
const sessionPlayerName = sessionStorage.getItem('sessionPlayerName');

if (sessionPlayerName) {
  playerName.textContent = sessionPlayerName;
  userGreat.textContent = sessionPlayerName;
}

document.getElementById("nameForm").addEventListener("submit", function(e) {
  e.preventDefault(); // ✋ STOP FORM SENDING

  const currentPlayer = username.value.trim(); // on enlève les espaces inutiles

  if (currentPlayer !== "") {
    playerName.textContent = currentPlayer;
    userGreat.textContent = currentPlayer;
    sessionStorage.setItem('sessionPlayerName', currentPlayer);
  }

  container.style.left = containerLeft;
  containerLeft = `-300%`;
});




//NAME FORM ENTRIES END

//LEVELBOX ENTRIES

const data = [
  {
    title: "Beginner",
    content: "0 - 10's number",
    divClassName: "bgnBox",
    levelOpt: "levelOpt",
    divId: "bgnBox",
    btnClassName: "bgnBtn",
    btnId: "bgnBtn",
    activeClassName: "active",
    activeText: "selected"
  },
  {
    title: "Medium",
    content: "0 - 20's number",
    divClassName: "medBox",
    levelOpt: "levelOpt",
    divId: "medBox",
    btnClassName: "medBtn",
    btnId: "medBtn",
    activeClassName: "active",
    activeText: "selected"
  },
  {
    title: "Pro",
    content: "0 - 50's number",
    divClassName: "proBox",
    levelOpt: "levelOpt",
    divId: "proBox",
    btnClassName: "proBtn",
    btnId: "proBtn",
    activeClassName: "active",
    activeText: "selected"
  }
];

const setLevelBox = document.getElementById("setLevelBox");

data.forEach(item => {
  const levelSetter = document.createElement("button");
  levelSetter.className = `${item.divClassName} ${item.levelOpt}`;
  levelSetter.innerHTML = `
    <span class="${item.activeClassName}"></span>
    <h3>${item.title}</h3>
    <p>${item.content}</p>
    <span class="${item.activeText}">Select</span>
  `;
  setLevelBox.appendChild(levelSetter);
});

// Sélectionner tous les boutons dynamiques après leur ajout
let opts = document.querySelectorAll('.levelOpt');

opts.forEach(opt => {
  opt.addEventListener("click", () => {
    // Supprimer l'id "isActive" des autres
    opts.forEach(o => {
      if (o.id === "isActive") o.removeAttribute('id');
    });

    // Ajouter l'id "isActive" à celui cliqué
    opt.id = "isActive";

    console.log("Niveau sélectionné :", opt.textContent.trim());
  });
});


//LEVELBOX ENTRIES