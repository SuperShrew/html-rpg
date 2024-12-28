class Element {
  static addDiv(id, parentElement, top, left, width, height, position) {
    const newDiv = document.createElement("div");
    newDiv.id = id;
    newDiv.style.top = top;
    newDiv.style.left = left;
    newDiv.style.width = width;
    newDiv.style.height = height;
    newDiv.style.position = position
    parentElement.appendChild(newDiv);
    return newDiv;
  }
  static addHitbox(parentElement, type) {
    let hitboxDiv = document.createElement("div");
    hitboxDiv.id = type + "Hitbox";
    parentElement.appendChild(hitboxDiv);
    return hitboxDiv;
  }
  static clearGame() {
    document.getElementById("game").innerHTML = "";
  }
  static addButton(id, parentElement, text, top, left, position, centre) {
    let button = document.createElement("button");
    button.id = id;
    button.innerHTML = text;
    button.style.top = top
    button.style.left = left
    button.style.position = position
    if (centre) {
      button.style.transform = "translateX(-50%)"
    }
    parentElement.appendChild(button);
    return button;
  }
  static addHeading(parentElement, text, align) {
    let heading = document.createElement("h1");
    heading.innerText = text;
    heading.style.textAlign = align;
    parentElement.appendChild(heading);
    return heading;
  }
}

function buildLevel(levelNum) {
  switch(levelNum) {
  case 0:
    let base = document.createElement("div");
    Element.addHeading(base, "Web RPG thing", "center");
    Element.addButton("", base, "Play", "100px", "50%", "absolute", true);
    base.style.backgroundColor = "white";
    base.style.width = "300px";
    base.style.height = "300px";
    base.style.position = "absolute";
    return base;
  }
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
