const bodyGame = document.getElementsByTagName("body")[0]
const btnBattle = document.createElement("button");
btnBattle.id = "btn_battle";
btnBattle.textContent = "Battle";
btnBattle.addEventListener("click", () => {
  startBattle()
})

const playerTeam = []
const cpuTeam = []

bodyGame.onload = () => {
    validateSession()
    const divVillains = document.getElementById("div_villains")
    const divHeroes = document.getElementById("div_heroes")

    fetch("/characters", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
    }).then(async function (response) {
        const characters = await response.json();
        for (let i = 0; i < characters.length; i++) {
            const character = characters[i]
            const newCardCharacter = document.createElement("div");
            const newStatusBar = document.createElement("span")
            const newDefSpan = document.createElement("span")
            const newHpSpan = document.createElement("span")
            const newAtkSpan = document.createElement("span")
            const newNameSpan = document.createElement("span")
            newStatusBar.className = "status"
            newNameSpan.className = "name"
            newCardCharacter.className = "card"
            newDefSpan.textContent = character.defense
            newHpSpan.textContent = character.hit_points
            newAtkSpan.textContent = character.attack
            newNameSpan.textContent = character.name
            newCardCharacter.id = character.id
            newCardCharacter.style.backgroundImage = `linear-gradient(to bottom, #ffffff30, #000000b8), url('${character.url_image}')`;
            newCardCharacter.addEventListener('click', function () {
                selectCharacter(character)
            })
            newStatusBar.append(newDefSpan, newHpSpan, newAtkSpan)
            newCardCharacter.append(newStatusBar, newNameSpan)
            if (character.hero) {
                divHeroes.appendChild(newCardCharacter)
            } else {
                divVillains.appendChild(newCardCharacter)
            }
        }
    });
}

const selectCharacter = (character) => {
  const index = playerTeam.findIndex(obj => obj.id === character.id);
  const clrPrimary = getComputedStyle(document.documentElement).getPropertyValue('--clrPrimary');
  const clrConstratPrimary = getComputedStyle(document.documentElement).getPropertyValue('--clrContrastPrimary');
  const clrSelected = getComputedStyle(document.documentElement).getPropertyValue('--clrSelected');
  const characterId = document.getElementById(character.id);
  const divTeam = document.getElementById("div_team");

  if (index !== -1) {
    playerTeam.splice(index, 1);
    if (character.hero) {
      characterId.style.borderColor = clrConstratPrimary;
    } else {
      characterId.style.borderColor = clrPrimary;
    }
    if (btnBattle.parentNode === divTeam) {
        divTeam.removeChild(btnBattle);
    }
    return;
  }
  if (playerTeam.length == 6) {
    alert("Team full");
    return;
  }
  playerTeam.push(character);
  characterId.style.borderColor = clrSelected;
  if (playerTeam.length == 6) {
    divTeam.appendChild(btnBattle);
  } 
}

const startBattle = () => {
  const gameSection = document.getElementsByClassName("game")[0]
  const stageSection = document.getElementsByClassName("stage")[0]
  const divStages = document.getElementById("div_stages")
  gameSection.style.display = "none"
  stageSection.style.display = "block"
  console.log(playerTeam)

  fetch("/stages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
}).then(async function (response) {
    const stages = await response.json();
    for (let i = 0; i < stages.length; i++) {
        const stage = stages[i]
        const newCardStage = document.createElement("div");
        newCardStage.className = "card-stage"
        newCardStage.style.backgroundImage = `linear-gradient(to bottom, #ffffff30, #000000b8), url('${stage.url_image}')`;
        newCardStage.addEventListener('click', function () {
          selectStage(stage)
      })
        divStages.appendChild(newCardStage)
      }
});
}

const selectStage = (stage) => {
  const stageSection = document.getElementsByClassName("stage")[0]
  stageSection.style.display = "none"
  bodyGame.style.backgroundImage = `url('${stage.url_image}')`;
}