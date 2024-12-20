// const draggableDiv = document.getElementById('draggable-div');
const dragContainer = document.getElementById('drag-container');

// let isDragging = false;
// let offsetX = 0;
// let offsetY = 0;

// draggableDiv.addEventListener('mousedown', (event) => {
//     isDragging = true;
//     offsetX = event.clientX - draggableDiv.offsetLeft;
//     offsetY = event.clientY - draggableDiv.offsetTop;
// });

// document.addEventListener('mousemove', (event) => {
//     if (isDragging) {
//         const x = event.clientX - offsetX;
//         const y = event.clientY - offsetY;

//         draggableDiv.style.left = `${x}px`;
//         draggableDiv.style.top = `${y}px`;
//     }
// });

// document.addEventListener('mouseup', () => {
//     isDragging = false;
// }); 

document.addEventListener("mousemove", (event) => {
    const R = Math.floor(Math.random() * 256)
    const G = Math.floor(Math.random() * 256)
    const B = Math.floor(Math.random() * 256)
    const span = document.createElement("span");
    span.style.width = "10px"
    span.style.height = "10px"
    span.style.position = "absolute"
    span.style.left = `${event.pageX-10}px`
    span.style.top = `${event.pageY-10}px`
    span.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
    dragContainer.appendChild(span);
});



console.log(`Largura da tela: ${larguraTela}px`);
console.log(`Altura da tela: ${alturaTela}px`);