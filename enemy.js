
class Enemy {
	constructor(stats, equipment) {
		this.stats = stats;
		this.equipment = equipment;
	}
	action(playerStats, playerEquipment) {
		if (this.stats.get("HP") > this.stats.get("HP")*0.1 && Math.random() < 0.5) {
			console.log("heal");
		} 
	}
}