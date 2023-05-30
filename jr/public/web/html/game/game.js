const bodyGame = document.getElementsByTagName("body")[0]
const btnStageSelect = document.createElement("button");
let counter = 0;
btnStageSelect.textContent = "Stage Select";
btnStageSelect.addEventListener("click", () => {
  selectStage()
})

let characters = []
const gameLog = []
const playerTeam = []
const cpuTeam = []
const cpuTeamName = []
const battleCharacters = []

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
        characters = await response.json();
        for (let i = 0; i < characters.length; i++) {
            const character = characters[i]
            const newCardCharacter = buildCard(character)
            newCardCharacter.addEventListener('click', function () {
                selectPlayerCharacter(character)
            })
            if (character.hero) {
                divHeroes.appendChild(newCardCharacter)
            } else {
                divVillains.appendChild(newCardCharacter)
            }
        }
    });
}

const selectCpuCharacter = () => {
  const cardsArray = characters
  let i = 0
  while (i < 6) {
    const min = 0
    const max = cardsArray.length - 1 
    const cardIndex = (Math.random() * (max - min)).toFixed(0);
    if (cpuTeamName.indexOf(cardsArray[cardIndex].name) == -1) {
      const character = cardsArray[cardIndex]
      const characterCopy = Object.assign({}, character);
      characterCopy.team = false
      cpuTeam.push(characterCopy)
      cpuTeamName.push(characterCopy.name)
      i++;
    }
  }
}

const selectPlayerCharacter = (character) => {
  const index = playerTeam.findIndex(obj => obj.name === character.name);
  const clrPrimary = getComputedStyle(document.documentElement).getPropertyValue('--clrPrimary');
  const clrConstratPrimary = getComputedStyle(document.documentElement).getPropertyValue('--clrContrastPrimary');
  const clrSelected = getComputedStyle(document.documentElement).getPropertyValue('--clrSelected');
  const characterId = document.getElementById(character.name);
  const divStartBattle = document.getElementById("div_start_battle");

  if (index !== -1) {
    playerTeam.splice(index, 1);
    if (character.hero) {
      characterId.style.borderColor = clrConstratPrimary;
    } else {
      characterId.style.borderColor = clrPrimary;
    }
    if (btnStageSelect.parentNode === divStartBattle) {
        divStartBattle.removeChild(btnStageSelect);
    }
    return;
  }
  if (playerTeam.length == 6) {
    alert("Team full");
    return;
  }
  const characterCopy = Object.assign({}, character);
  characterCopy.team = true
  playerTeam.push(characterCopy);
  characterId.style.borderColor = clrSelected;
  if (playerTeam.length == 6) {
    divStartBattle.appendChild(btnStageSelect);
  }
}

const selectStage = () => {
  selectCpuCharacter()
  const gameSection = document.getElementsByClassName("game")[0]
  const stageSection = document.getElementsByClassName("stage")[0]
  const divStages = document.getElementById("div_stages")
  gameSection.style.display = "none"
  stageSection.style.display = "block"

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
          startBattle(stage)
        })
        divStages.appendChild(newCardStage)
      }
});
}

const startBattle = (stage) => {
  const stageSection = document.getElementsByClassName("stage")[0]
  const battleSection = document.getElementsByClassName("battle")[0]
  const divBattlePlayer = document.getElementById("div_battle_player")
  const divBattleCpu = document.getElementById("div_battle_cpu")
  
  stageSection.style.display = "none"
  battleSection.style.display = "block"
  bodyGame.style.backgroundImage = `linear-gradient(to bottom, #00000050, #000000dd), url('${stage.url_image}')`;
  for (let i = 0; i < playerTeam.length; i++) {
    const character = playerTeam[i]
    character.id = i+1
    const newCardCharacter = buildCard(character)
    newCardCharacter.id = i+1
    newCardCharacter.addEventListener('click', function () {
      chooseAttackers(character)
    })
    divBattlePlayer.appendChild(newCardCharacter) 
  }
  for (let i = 0; i < cpuTeam.length; i++) {
    const character = cpuTeam[i]
    character.id = i+7
    const newCardCharacter = buildCard(character)
    newCardCharacter.id = i+7
    newCardCharacter.addEventListener('click', function () {
      chooseAttackers(character)
    })
    divBattleCpu.appendChild(newCardCharacter) 
  }
}

const buildCard = (character) => {
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
  newCardCharacter.id = character.name
  newCardCharacter.style.backgroundImage = `linear-gradient(to bottom, #ffffff30, #000000b8), url('${character.url_image}')`;
  newStatusBar.append(newDefSpan, newHpSpan, newAtkSpan)
  newCardCharacter.append(newStatusBar, newNameSpan)
  return newCardCharacter
}

const chooseAttackers = (character) => {
  const index = battleCharacters.indexOf(character)
  const characterId = document.getElementById(character.id)
  const clrSelected = getComputedStyle(document.documentElement).getPropertyValue('--clrSelected')
  const clrCpu = getComputedStyle(document.documentElement).getPropertyValue('--clrPrimary');
  const clrPlayer = getComputedStyle(document.documentElement).getPropertyValue('--clrContrastPrimary');
  const battleLog = document.getElementById("div_battle_log")
  if (index === -1) {
  const indexTeam = battleCharacters.findIndex(obj => obj.team === character.team)
    if (indexTeam === -1) {
      battleCharacters.push(character)
      characterId.style.borderColor = clrSelected;
    } else if (indexTeam !== -1) {
      const characterIdBattle = document.getElementById(battleCharacters[indexTeam].id)
      if (character.team) { 
        characterId.style.borderColor = clrSelected;
        characterIdBattle.style.borderColor = clrPlayer;
        battleCharacters.splice(indexTeam, 1)
        battleCharacters.push(character)
      } else {
        characterId.style.borderColor = clrSelected;
        characterIdBattle.style.borderColor = clrCpu;
        battleCharacters.splice(indexTeam, 1)
        battleCharacters.push(character)
      }
    }
  } else if (index !== -1) {
    if (character.team) {
      characterId.style.borderColor = clrPlayer;
      battleCharacters.splice(index, 1)
    } else {
      characterId.style.borderColor = clrCpu;
      battleCharacters.splice(index, 1)
    }
  }
  if (battleCharacters.length == 2) {
    if (battleCharacters[0].team) {
      const characterIdBattlePlayer = document.getElementById(battleCharacters[0].id)
      const characterIdBattleCpu = document.getElementById(battleCharacters[1].id)
      characterIdBattleCpu.style.borderColor = clrCpu;
      characterIdBattlePlayer.style.borderColor = clrPlayer;
      console.log(`${battleCharacters[0].name} vs ${battleCharacters[1].name}`)
    } else if (battleCharacters[1].team) {
      const characterIdBattleCpu = document.getElementById(battleCharacters[0].id)
      const characterIdBattlePlayer = document.getElementById(battleCharacters[1].id)
      characterIdBattleCpu.style.borderColor = clrCpu;
      characterIdBattlePlayer.style.borderColor = clrPlayer;
      console.log(`${battleCharacters[1].name} vs ${battleCharacters[0].name}`)
    }
    const newHr = document.createElement("hr")
    const newParagraph = document.createElement("p")
    newParagraph.textContent = `${++counter} - ${battleCharacters[0].team ? battleCharacters[0].name : battleCharacters[1].name} vs ${battleCharacters[1].team ? battleCharacters[0].name : battleCharacters[1].name}`
    battleLog.append(newHr, newParagraph)
    battleCharacters.splice(0, 2)
  }
}