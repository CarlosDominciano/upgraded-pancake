const canvasOutfit = document.getElementById('canvas_outfit');
console.log(canvasOutfit)

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

function getOutfit() {
  fetch("/totens/listarTotem", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(async function (resposta) {
    const containerTotem = document.querySelector(".totens");
    const totens = await resposta.json();
    for (let i = 0; i < totens.length; i++) {

      let idTotens = document.createElement("div");
      console.log(totens[i])
      idTotens.innerHTML = `<span onclick="mostrarTotem(${totens[i].idTotem})">Totem_${totens[i].idTotem}</span>`;

      containerTotem.appendChild(idTotens);
    }

  });
  setTimeout(() => {
      console.log("foi os totens?")
  }, 3000);
}