HealthyLiving.BonusInstructions = function(game) {
    this.startBG;
    this.startPrompt;
    this.ding;
	this.Instructions
}

HealthyLiving.BonusInstructions.prototype = {
	
	create: function () {
        this.ding = this.add.audio('select_audio');
		this.Instructions = this.add.audio('Instructions');
		this.Instructions.play();
		startBG = this.add.image(0, 0, 'toothmanInstructionsBG');
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		
	},

	startGame: function (pointer) {
        this.ding.play();
		this.state.start('BonusGame');
	}
};