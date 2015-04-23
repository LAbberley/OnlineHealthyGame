HealthyLiving.CandymanMenu = function(game) {
    this.startBG;
    this.startPrompt;
    this.ding;
}

HealthyLiving.CandymanMenu.prototype = {
	
	create: function () {
        this.ding = this.add.audio('select_audio');
        
		startBG = this.add.image(0, 0, 'toothmanTitle');
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		
	},

	startGame: function (pointer) {
        this.ding.play();
		this.state.start('BonusInstructions');
	}
};