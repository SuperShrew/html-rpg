const flags = {
	testFlag: true,
	gotFirstWeapon: false
};

// PROBABLY overly complicated, but may allow for flexibility in dialog effects? (idk what I'm talking about)
class NPC {
	constructor(npcName, dialogs) {
		this.name = name; //string
		this.dialogs = dialogs; //map of arrays of function objects @_@
	}

	function interact() {}

	function doDialog(sequence) {
		playerCtrl = false;
		sequence[0]();
        btnNext.style.display = "";
		let i = 0;
        btnNext.onclick = function() {
        	i++;
        	if (i < sequence.length) {
				sequence[i]();
			} else {
				textElement.innerHTML = "";
				btnNext.style.display = "none";
				playerCtrl = true;
			}
		}
	
	}


	function dialogTalk(text){
		textElement.innerHTML = this.name + ": " + text;
	}

	function dialogNarration(text){
		textElement.innerHTML = text;
	}

	function dialogGetItem(item, quantity) {
		if (quantity < 1) {
			throw "Error: cannot receive less than 1 of an item.";
			return;
		}
		textElement.innerHTML = "you received " + String(quantity) + " " + item + "(s).";
    playerInventory[item] += quantity;
	}

	function dialogGiveItem(item, quantity) {
		if (quantity < 1) {
			throw "Error: cannot give less than 1 of an item.";
			return;
		}
		if (quantity > playerInventory[item] || playerInventory[item] === undefined) {
			throw "Error: cannot give more items than you have.";
			return;
		}
		textElement.innerHTML = "you gave " + this.name + " " + String(quantity) + " " + item + "(s).";
    playerInventory[item] -= quantity;
	}
	

}


// NPC definition: Old Man //
const npcOldMan = new NPC("Old Man", new Map());
// 1st meeting dialog
npcOldMan.dialogs.set("meet",
	[
		function() {
			npcOldMan.dialogTalk("you finally awoke! weird blue cube. you have a long journey ahead of you, take this");
		},
		function() {
			npcOldMan.dialogGetItem("WOODEN SWORD", 1);
			flags.gotFirstWeapon = true;
		}
	]);
// default dialog
npcOldMan.dialogs.set("general",
	[
		function() {
			npcOldMan.dialogTalk("go away.");
		}
	]);


npcOldMan.interact = function() {
	//do flag check here?
	if (!flags.gotFirstWeapon) {
		doDialog(dialogs["meet"]);
	} else {
		doDialog(dialogs["general"]);
	}
}