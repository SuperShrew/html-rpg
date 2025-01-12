//WORK IN PROGRESS

class Battle {
	constructor(enemies, playerInventory, playerStats) {
		this.enemies = enemies; // an array of Enemy classes
		this.playerInventory; // dictionary
		this.playerStats; // dictionary
	}
	main() {
		let order = this.enemies.push("player");
		order.sort((a, b) => (b.stats["speed"] || playerStats["speed"]) - (a.stats["speed"] || playerStats["speed"]));
		return order;
	}
}

a = new Battle([new Enemy({"speed": 10}, {}), new Enemy({"speed": 5}, {})], {}, {"speed": 7});
a.main().forEach((stat) => {
	console.log(stat)
});