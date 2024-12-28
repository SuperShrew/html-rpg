export function addDiv(id, parentElement) {
  const newDiv = document.createElement("div");
  newDiv.id = id;
  parentElement.appendChild(newDiv);
  return newDiv;
}

export function addButton(id, parentElement, text) {
  const button = document.createElement("button");
  button.id = id;
  button.innerHTML = text;
  parentElement.appendChild(button);
  return button;
}

export function addHitbox(parentElement) {
  const hitboxDiv = addDiv(parentElement.id + "Hitbox", parentElement)
  return hitboxDiv;
}

export function clearCurrentLevel() {
  document.getElementById("game").innerHTML = "";
}

/* OLD CODE FROM HERE

export function test() {
  alert("test")
}

export function addDiv (id, parentElement) {
  var newDiv = document.createElement("div");
  newDiv.id = id;
  parentElement.appendChild(newDiv);

  return newDiv;
}

///formatDiv, addHitbox, etc. ?

export function addHitbox (element) {
  var hitboxDiv = document.createElement("div");
  hitboxDiv.id = element.id + "Hitbox";
  element.appendChild(hitboxDiv);
  return hitboxDiv;
}

export function clearCurrentLevel () {
  document.getElementById("game").innerHTML = "";
}

export function buildLevel1 () {
  const game = document.getElementById("game");
  
  var mover = addDiv("mover", game);
  ///set colour and stuff
  var exit = addDiv("door1", game);

  
  var oldMan = addDiv("oldMan", game);
  addHitbox(oldMan);
} 
export function buildLevel2() {
  const game = document.getElementById("game");

  game.innerHTML = ""
  var mover = addDiv("mover", game);
  game.style.backgroundColor = "green";
  ///set colour and stuff
}

export function addButton(text, id, parentElement) {
  var button = document.createElement("button");
  button.id = id;
  button.innerHTML = text;
  parentElement.appendChild(button);
  return button;
}
*/