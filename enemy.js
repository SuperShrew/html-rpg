
class Enemy {
	constructor(stats, equipment, attacks) {
		this.stats = stats;
		this.equipment = equipment;
		this.attacks = attacks;
	}
	action(playerStats, playerEquipment) {
		let text = document.getElementById("text");
		console.log(this.stats["name"]);
		if ((this.stats["HP"] < this.stats["maxHP"]*0.1) && (Math.random() < 0.5)) {
			let healAmount = Math.floor(this.stats["maxHP"]*0.1);
			this.stats["HP"] = this.stats["HP"] + healAmount;
			/*text.innerHTML = */console.log(this.stats["name"] + " healed " + String(healAmount) + "HP");

		} else {
			let rand = Math.floor(Math.random()*Object.keys(this.attacks).length);
			let attack = this.attacks[Object.keys(this.attacks)[rand]];
			if (!(attack["energy"] > this.stats["energy"])) {
				playerStats["HP"] = playerStats["HP"]-attack["dmg"];
				this.stats["energy"] = this.stats["energy"]-attack["cost"];
				/*text.innerHTML = */console.log(this.stats["name"] + " attacked with " + Object.keys(this.attacks)[rand] + " and dealt " + String(attack["dmg"]) + " damage");
			}
		}
	}
}

//TESTING

let eTest = new Enemy(
{
	"name": "test",
	"HP": 10,
	"maxHP": 1100,
	"energy": 20,
	"maxEnergy": 20
},
{	},
{
	"basic": {
		"dmg": 10,
		"cost": 1
	},
	"advanced": {
		"dmg": 40,
		"cost": 5
	}
}
);
eTest.action({"HP": 100}, {})