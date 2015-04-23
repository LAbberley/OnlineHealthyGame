var HealthyLiving = {};

HealthyLiving.Boot = function(game) {};

HealthyLiving.Boot.prototype = {
    preload: function() {
        this.load.image('BG', 'images/BG.png');
		this.load.image('toothmanBG', 'images/toothmanBG.png');
		this.load.image('toothmanInstructionsBG', 'images/toothmanInstructionsBG.png');
		this.load.image('toothmanTitle', 'images/toothmanTitle.png');
        this.load.image('cor', 'images/Correct.png');
		this.load.image('wro', 'images/wrongbox.png');
        this.load.image('preloaderBar', 'images/loader_bar.png');
        this.load.image('titleimage', 'images/TitleImage.png');
    },
    
    create: function() {
        this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 270;
		this.scale.minHeight = 480;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = true;
		this.scale.setScreenSize(true);

		this.input.addPointer();
		this.stage.backgroundColor = '#09bbee';
        
        this.state.start('Preloader');
    }
}