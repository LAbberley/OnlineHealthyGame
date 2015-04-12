HealthyLiving.StartMenu = function(game) {
    this.startBG;
    this.startPrompt;
    this.ding;
}

HealthyLiving.StartMenu.prototype = {
	
	create: function () {
        this.ding = this.add.audio('select_audio');
        
		startBG = this.add.image(0, 0, 'titlescreen');
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		
		startPrompt = this.add.image(140, 555, 'go');
	},

	startGame: function (pointer) {
        this.ding.play();
		this.state.start('Game');
	}
};