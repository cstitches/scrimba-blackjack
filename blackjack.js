let player = {
    name: "Caryn",
    chips: 145
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

let newCardBtn = document.getElementById("new-card-btn");
let dealBtn = document.getElementById("deal-btn");

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomResult = Math.floor(Math.random() * 13) + 1;
    if (randomResult > 10) {
        return 10;
    } else if (randomResult === 1) {
        return 11;
    } else {
        return randomResult;
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
    dealBtn.textContent = "Start New Game";
}

function renderGame() {
    newCardBtn.textContent = "New Card";
    cardsEl.textContent = ""; // resets text content to new card adds on w/o re-printing original cards
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", ";
    }

    sumEl.textContent = sum;

    if (sum <= 20) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game.";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
    if (isAlive === false || hasBlackJack === true) {
        newCardBtn.textContent = "No More Cards"
    }
}