//WORK IN PROGRESS

class Battle {
	constructor(enemies, playerInventory, playerStats) {
		this.enemies = enemies;
		this.playerInventory = playerInventory
		this.playerStats = playerStats
	}
	main() {
		let order = this.enemies.slice();
		order.push("player");
		order.sort((a, b) => {
			const speedA = a.stats?.speed || this.playerStats.speed;
			const speedB = b.stats?.speed || this.playerStats.speed;
			return speedB - speedA;
        });
		return order;
	}
}

a = new Battle([new Enemy({"speed": 10}, {}), new Enemy({"speed": 5}, {})], {}, {"speed": 7});
a.main().forEach((stat) => {
	console.log(stat)
});