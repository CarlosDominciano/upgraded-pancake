// Seção de Variáveis
const divBoardMiddle = document.getElementById("div_board_middle");
const divDiscardPile = document.getElementById("div_discard_pile");
const divMasterCard = document.getElementById("div_master_card");

let deck, shuffledDeck, discardedCards;
let offsetX, offsetY, draggedElement;
let windowWidth = window.screen.width, windowHeight = window.screen.height, zIndexOffset = 100;
const suits = ["♥", "♦", "♣", "♠"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let cards = [];

// Função de Criação do Baralho
function createDeck() {
    for (let suit of suits) {
        for (let value of values) {
            cards.push(value + suit);
        }
    }
}

// Função para Embaralhar o Baralho
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// Função para Iniciar uma Rodada
function startRound() {
    createDeck();
    deck = Array.from({ length: cards.length }, (_, i) => i + 1); // Cria o baralho
    shuffledDeck = shuffle(deck); // Embaralha o baralho
    discardedCards = []; // Cartas descartadas
    divDiscardPile.textContent = null;
    divMasterCard.innerHTML = null;
}

// Função para Retirar uma Carta
function drawCard() {
    if (discardedCards.length === cards.length+1) {
        alert("O baralho está vazio!");
        return;
    }
    const card = cards[shuffledDeck.pop() - 1]; // Retira a carta
    discardedCards.push(card); // Adiciona ao descarte
    showCard();
}

// Função para Exibir as Cartas
function showCard() {
    divMasterCard.innerHTML = null;
    divMasterCard.appendChild(setColor(discardedCards[discardedCards.length - 1], "master"));
    divDiscardPile.appendChild(setColor(discardedCards[discardedCards.length - 1], "mini"));
}

// Função para Setar a Cor das Cartas
function setColor(card, id) {
    const suitColor = card.includes("♥") || card.includes("♦");
    const spanElement = document.createElement("span");
    spanElement.className = "mini-card";
    spanElement.id = `${id} - ${card}`;
    spanElement.style.color = suitColor ? "red" : " ";  // Cor vermelha para ♥ e ♦
    spanElement.textContent = card;
    spanElement.style.position = "relative";

    // Adiciona evento de arrasto
    if (id.includes("mini")) {
        spanElement.addEventListener('mousedown', startDrag);
    }

    return spanElement;
}

// Função para Iniciar o Arrasto
function startDrag(event) {
    draggedElement = event.target;
    const rect = draggedElement.getBoundingClientRect();
    offsetX = event.pageX - rect.left;
    offsetY = event.pageY - rect.top;
    draggedElement.style.zIndex = draggedElement.style.zIndex === zIndexOffset ? zIndexOffset : ++zIndexOffset;
    document.addEventListener('mousemove', dragElement);
    document.addEventListener('mouseup', stopDrag);
}

// Função para Arrastar o Elemento
function dragElement(event) {
    if (!draggedElement) return;

    // Evita bug visual
    draggedElement.style.position = "absolute";

    // Obtém as dimensões do contêiner que limita o arrasto
    const containerRect = divBoardMiddle.getBoundingClientRect();
    const elementRect = draggedElement.getBoundingClientRect();

    // Calcula as novas posições propostas
    let newLeft = event.pageX - offsetX;
    let newTop = event.pageY - offsetY;

    // Limita à área do contêiner
    if (newLeft < containerRect.left) {
        newLeft = containerRect.left;
    } else if (newLeft + elementRect.width > containerRect.right) {
        newLeft = containerRect.right - elementRect.width;
    }

    if (newTop < containerRect.top) {
        newTop = containerRect.top;
    } else if (newTop + elementRect.height > containerRect.bottom) {
        newTop = containerRect.bottom - elementRect.height;
    }

    // Atualiza a posição do elemento
    draggedElement.style.left = `${newLeft}px`;
    draggedElement.style.top = `${newTop}px`;
}

// Função para Parar o Arrasto
function stopDrag() {
    document.removeEventListener('mousemove', dragElement);
    document.removeEventListener('mouseup', stopDrag);
    draggedElement = null;
}

// Inicializa o Baralho e Começa a Rodada
startRound();

// Configuração do Canvas para Fundo
const canvas = document.getElementById("canvas_board_background_details");
const ctx = canvas.getContext("2d");
canvas.width = divBoardMiddle.clientWidth;
canvas.height = divBoardMiddle.clientHeight;
const squareWidth = 1, squareHeight = 1, spacing = 0.1;
const numSquareX = Math.ceil(canvas.width / (squareWidth + spacing));
const numSquareY = Math.ceil(canvas.height / (squareHeight + spacing));

// Desenha o Fundo do Tabuleiro
for (let i = 0; i < numSquareX; i++) {
    for (let j = 0; j < numSquareY; j++) {
        const x = i * (squareWidth + spacing);
        const y = j * (squareHeight + spacing);
        drawSquare(x, y, squareWidth, squareHeight);
    }
}

// Função para Desenhar um Quadrado no Canvas
function drawSquare(x, y, width, height) {
    ctx.fillStyle = "#00000065";
    ctx.fillRect(x, y, width, height);
}

window.onload = () => {
    startRound();
};