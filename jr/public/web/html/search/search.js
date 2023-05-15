const canvasOutfit = document.getElementById('canvas_outfit')
const chartOutfit =  document.getElementById('chart_outfit')
const canvasCharacter = document.getElementById('canvas_character')
const chartCharacter =  document.getElementById('chart_character')
const bodySearch = document.getElementsByTagName("body")[0]
const form = document.getElementById("form_search")
const chartColors = ["#BB0A0A", "#DFDFDF"]

const imgfoda = document.getElementById("imagemFoda")

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
  fetch("/outfits", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(async function (response) {
    const sltOutfit = document.getElementById("slt_outfit");
    const outfits = await response.json();
    for (let i = 0; i < outfits.length; i++) {
      const outfit = outfits[i]
      getFavoritedOutfit(outfit.id)
      const newSltOutfit = document.createElement("option");
      newSltOutfit.value = outfit.name;
      newSltOutfit.textContent = outfit.name;
      sltOutfit.appendChild(newSltOutfit);
    }
    setTimeout(() => {
      const heightChart = (labelsOutfit.length * 100) + 'px'
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
    const sltCharacter = document.getElementById("slt_character");
    const characters = await response.json();
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i]
      getFavoritedCharacter(character.id)
      const newSltCharacter = document.createElement("option");
      newSltCharacter.value = character.name;
      newSltCharacter.textContent = character.name;
      sltCharacter.appendChild(newSltCharacter);
    }
    imgfoda.src = characters[19].url_image;
    setTimeout(() => {
      const heightChart = (labelsCharacter.length * 100) + 'px'
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
        text: 'Most loved outfits',
        color: "#fff"
      }
    }
  },
});

