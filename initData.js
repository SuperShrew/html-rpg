const gameElement = document.getElementById("game");
const textElement = document.getElementById("text");
const btnNext = addButton("Next", "btnNext", buttonDiv);
btnNext.style.display = "none";
const gameWidth = parseInt(gameElement.offsetWidth) - parseInt(window.getComputedStyle(gameElement).borderWidth) * 2;
const gameHeight = parseInt(gameElement.offsetHeight) - parseInt(window.getComputedStyle(gameElement).borderTopWidth) * 2;


const playerMaxSpeed = 20;
let playerX = 0;
let playerY = 0;
let playerCtrl = true;
let playerInventory = {};
let npcByID = new Map();

let currentLevel = 0; // title screen