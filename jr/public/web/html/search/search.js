const canvasOutfit = document.getElementById('canvas_outfit');
const bodySearch = document.getElementsByTagName("body")[0]

body.onload = () => {
  fetch("/outfits", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(async function (resposta) {
    const sltOutfit = document.getElementById("slt_outfit");
    const outfits = await resposta.json();
    for (let i = 0; i < outfits.length; i++) {
      const outfit = outfits[i]
      const newSltOutfit = document.createElement("option");
      newSltOutfit.value = outfit.name;
      newSltOutfit.textContent = outfit.name;
      sltOutfit.appendChild(newSltOutfit);
    }

  });

  fetch("/characters", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(async function (resposta) {
    const sltCharacter = document.getElementById("slt_character");
    const characters = await resposta.json();
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i]
      const newSltCharacter = document.createElement("option");
      newSltCharacter.value = character.name;
      newSltCharacter.textContent = character.name;
      sltCharacter.appendChild(newSltCharacter);
    }

  });
}

const labels = ['Aranha de ferro','Gwen-Aranha']
const data = {
  labels: labels,
  datasets: [
    {
      label: 'aaa',
      data: [7,2],
      borderColor: "blue",
      backgroundColor: "red",
    }
  ]
};

const config = new Chart(canvasOutfit, {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart'
      }
    }
  },
});

