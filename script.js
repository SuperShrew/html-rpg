
const gameElement = document.getElementById("game");
const textElement = document.getElementById("text");
const gameWidth = parseInt(gameElement.offsetWidth) - parseInt(gameElement.style.borderWidth) * 2;
const gameHeight = parseInt(gameElement.offsetHeight) - parseInt(gameElement.style.borderWidth) * 2;


const playerMaxSpeed = 20;
let playerX = 0;
let playerY = 0;

let currentLevel = 0;

document.addEventListener("keypress", function(event) {
  // handle input
  let leftPressed = false;
  let rightPressed = false;
  let upPressed = false;
  let downPressed = false;
  if (event.code === "KeyA" || event.code === "ArrowLeft") {
    leftPressed = true;
  }
  if (event.code === "KeyD" || event.code === "ArrowRight") {
    rightPressed = true;
  }
  if (event.code === "KeyW" || event.code === "ArrowUp") {
    upPressed = true;
  }
  if (event.code === "KeyS" || event.code === "ArrowDown") {
    downPressed = true;
  }


  // early out if we are still in the title screen
  if (currentLevel < 1) {
    return;
  }

  // player control
  let playerElement = document.getElementById("player");

  if (leftPressed && !rightPressed) {
    playerX -= speed;
  }
  if (rightPressed && !leftPressed) {
    playerX += speed;
  }
  if (upPressed && !downPressed) {
    playerY -= speed;
  }
  if (downPressed && !upPressed) {
    playerY += speed;
  }
  playerX = Math.max(0, Math.min(playerX, gameWidth));
  playerY = Math.max(0, Math.min(playerY, gameHeight));
  playerElement.style.left = playerX + "px";
  playerElement.style.top = playerY + "px";

});


function collision(div1, div2) {
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();
    return (
        rect1.left <= rect2.right &&
        rect1.right >= rect2.left &&
        rect1.top <= rect2.bottom &&
        rect1.bottom >= rect2.top
    );
}

function inside(innerDiv, outerDiv) {
    const innerRect = innerDiv.getBoundingClientRect();
    const outerRect = outerDiv.getBoundingClientRect();
    return (
        innerRect.top >= outerRect.top &&
        innerRect.left >= outerRect.left &&
        innerRect.bottom <= outerRect.bottom &&
        innerRect.right <= outerRect.right
    );
}


/*  OLD CODE FROM HERE

import * as level from './levelBuilder.js';
var Left = 0;
var Top = 0;
var speed = 20;
var oldManT = false
var inventory = {};
var invString = "";
level.buildLevel1()

function collision(div1, div2) {
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();
    return (
        rect1.left <= rect2.right &&
        rect1.right >= rect2.left &&
        rect1.top <= rect2.bottom &&
        rect1.bottom >= rect2.top
    );
}


function inside(innerDiv, outerDiv) {
    const innerRect = innerDiv.getBoundingClientRect();
    const outerRect = outerDiv.getBoundingClientRect();

    return (
        innerRect.top >= outerRect.top &&
        innerRect.left >= outerRect.left &&
        innerRect.bottom <= outerRect.bottom &&
        innerRect.right <= outerRect.right
    );
}



document.addEventListener("keypress", function(event) {
  var door1 = document.getElementById("door1");
  var mover = document.getElementById("mover");
  var oldMan = document.getElementById("oldManHitbox");
  var text = document.getElementById("text");
  var game = document.getElementById("game");
  var gameCSS = window.getComputedStyle(game);
  var gameWidth = parseInt(game.offsetWidth) - parseInt(gameCSS.borderWidth) * 2;
  var gameHeight = parseInt(game.offsetHeight) - parseInt(gameCSS.borderWidth) * 2;
  var buttonDiv = document.getElementById("buttonDiv");
  var buttonNext = level.addButton("Next", "buttonNext", buttonDiv);
  buttonNext.style.display = "none";
  if (event.key == "a") {
    Left = Left - speed;
    mover.style.left = Left + "px";
    if (parseInt(mover.style.left) == -speed) {
      Left = Left + speed;
      mover.style.left = Left + "px";
    }
  }
  if (event.key == "d") {
    Left = Left + speed;
    mover.style.left = Left + "px";
    if (parseInt(mover.style.left) >= gameWidth) {
      Left = Left - speed;
      mover.style.left = Left + "px";
    }
  }
  if (event.key == "w") {
    Top = Top - speed;
    mover.style.top = Top + "px";
    if (parseInt(mover.style.top) == -speed) {
      Top = Top + speed;
      mover.style.top = Top + "px";
    }
  }
  if (event.key == "s") {
    Top = Top + speed;
    mover.style.top = Top + "px";
    if (parseInt(mover.style.top) >= gameHeight) {
      Top = Top - speed;
      mover.style.top = Top + "px";
    }
  }
  if (event.key == " ") {   
    if (inside(mover, door1)) {
      if (event.key == " ") {
        level.buildLevel2()
        Top = 0;
        Left = 0;
      }
    }
    else if (collision(mover, oldMan)) {
      if (!oldManT) {
        text.innerText = "Old Man: you finally awoke! weird blue cube. you have a long journey ahead of you, take this"
        oldManT = true;
        buttonNext.style.display = "";
        buttonNext.onclick = function() {
          text.innerHTML = "you recieved: WOODEN SWORD"
          inventory["WOODEN SWORD"] = 1;
          buttonNext.style.display = "none";
        }
      } else {
        text.innerHTML = "Old Man: go away.";
      }
    }
  }
  if (event.key == "1")
  {
    invString = ""
    for (var i in inventory)1
      {
        invString = invString + i + ": " + inventory[i] + "\n";
      }
    text.innerHTML = invString;
  }
});*/
