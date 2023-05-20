const canvasOutfit = document.getElementById('canvas_outfit')
const chartOutfit =  document.getElementById('chart_outfit')
const canvasCharacter = document.getElementById('canvas_character')
const chartCharacter =  document.getElementById('chart_character')

const bodySearch = document.getElementsByTagName("body")[0]
const ttlinformation = document.getElementById("ttl_information")
const form = document.getElementById("form_search")
const sltOutfit = document.getElementById("slt_outfit")
const sltCharacter = document.getElementById("slt_character")

const chartColors = ["#BB0A0A", "#DFDFDF"]

const labelsOutfit = [];
const datasOutfit = [];
const dataOutfit = {
  labels: labelsOutfit,
  datasets: [
    {
      label: 'Outfits',
      data: datasOutfit,
      borderColor: chartColors[1],
      borderRadius: 5,
      backgroundColor: chartColors[0]
    }
  ]
};


const labelsCharacter = [];
const datasCharacter = [];
const dataCharacter = {
  labels: labelsCharacter,
  datasets: [
    {
      label: 'Characters',
      data: datasCharacter,
      borderColor: chartColors[1],
      borderRadius: 5,
      backgroundColor: chartColors[0]
    }
  ]
};


bodySearch.onload = () => {
  validateSession()
  ttlinformation.textContent = `Hello, ${sessionStorage.NAME_USER}!`
  fetch("/outfits", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(async function (response) {
    const outfits = await response.json();
    for (let i = 0; i < outfits.length; i++) {
      const outfit = outfits[i]
      getFavoritedOutfit(outfit.id)
      const newSltOutfit = document.createElement("option");
      newSltOutfit.value = outfit.id;
      newSltOutfit.textContent = outfit.name;
      sltOutfit.appendChild(newSltOutfit);
    }
    setTimeout(() => {
      let heightChart;
      if (labelsOutfit.length > 1) {
        heightChart = (labelsOutfit.length * 55 + 100) + 'px'
      } else {
        heightChart = "150px" 
      }
      chartOutfit.classList.add('new-height-outfit')
      const stylesheet = document.styleSheets[0];
      stylesheet.insertRule('.new-height-outfit { }', stylesheet.cssRules.length);
      const cssRule = stylesheet.cssRules[stylesheet.cssRules.length - 1];
      cssRule.style.setProperty('height', heightChart);
      chartCanvasOutfit.update();
    }, 500);
    
  });

  fetch("/characters", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(async function (response) {
    const characters = await response.json();
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i]
      getFavoritedCharacter(character.id)
      const newSltCharacter = document.createElement("option");
      newSltCharacter.value = character.id;
      newSltCharacter.textContent = character.name;
      sltCharacter.appendChild(newSltCharacter);
    }
    setTimeout(() => {
      let heightChart
      if (labelsCharacter.length > 1) {
        heightChart = (labelsCharacter.length * 55 + 100) + 'px'
      } else {
        heightChart = "150px" 
      }
      chartCharacter.classList.add('new-height-character')
      const stylesheet = document.styleSheets[0];
      stylesheet.insertRule('.new-height-character { }', stylesheet.cssRules.length);
      const cssRule = stylesheet.cssRules[stylesheet.cssRules.length - 1];
      cssRule.style.setProperty('height', heightChart);
      chartCanvasCharacter.update();
    }, 1000);
  });
}

const getFavoritedCharacter = (fkCharacter) => {
  fetch(`/characters/get-favorited-characters/${fkCharacter}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(async function (response) {
    const character = await response.json();
    if (character[0].votes != 0) {
      datasCharacter.push(character[0].votes);
      labelsCharacter.push(character[0].name);  
    }
  });
}

const getFavoritedOutfit = (fkOutfit) => {
  fetch(`/outfits/get-favorited-outfits/${fkOutfit}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(async function (response) {
    const outfit = await response.json();
    if (outfit[0].votes != 0) {
      datasOutfit.push(outfit[0].votes);
      labelsOutfit.push(outfit[0].name);
    }
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const idUser = sessionStorage.ID_USER;
  const btn = document.getElementById("btn_search")
  const icon = '<ion-icon name="cloud-upload"></ion-icon>'
  const textInsert = "Insert vote"
  loading(btn.id, icon);

  fetch(`/users/update-outfit-character/${idUser}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fkOutfitServer: sltOutfit.value,
      fkCharacterServer: sltCharacter.value,
  })
  }).then(function (response) {
    if (response.ok) {
      setTimeout(() => {
        stopLoading(btn.id, textInsert)
        location.reload()
      }, 1000)
    } else {
      throw ("Error to create user!");
    }
  }).catch(function (response) {
    stopLoading(btn.id, textInsert);
  });
})

const chartCanvasOutfit = new Chart(canvasOutfit, {
  type: 'bar',
  data: dataOutfit,
  options: {
    maintainAspectRatio: false,
    responsive: false,
    scales: {
      y: {
        ticks: {
          color: 'white'
        },
        beginAtZero: true,
        grid: {
          display: false // Define para não exibir as linhas de grade no eixo Y
        }
      },
      x: {
        ticks: {
          color: 'white'
        },
        beginAtZero: true,
        grid: {
          display: false // Define para não exibir as linhas de grade no eixo Y
        }
      }
    },
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        color: chartColors[1],
        labels: {
          color: chartColors[1]
        }
      },
      title: {
        display: true,
        text: 'Most loved outfits',
        color: "#fff"
      }
    }
  },
});

const chartCanvasCharacter = new Chart(canvasCharacter, {
  type: 'bar',
  data: dataCharacter,
  options: {
    maintainAspectRatio: false,
    responsive: false,
    scales: {
      y: {
        ticks: {
          color: 'white'
        },
        beginAtZero: true,
        grid: {
          display: false // Define para não exibir as linhas de grade no eixo Y
        }
      },
      x: {
        ticks: {
          color: 'white'
        },
        beginAtZero: true,
        grid: {
          display: false // Define para não exibir as linhas de grade no eixo Y
        }
      }
    },
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        color: chartColors[1],
        labels: {
          color: chartColors[1]
        }
      },
      title: {
        display: true,
        text: 'Most loved characters',
        color: "#fff"
      }
    }
  },
});

