HealthyLiving.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

HealthyLiving.Preloader.prototype = {
	
	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
		this.load.atlasXML('toothman', 'images/spritesheets/Toothman.png', 'images/spritesheets/Toothman.xml');
        this.load.atlasXML('candy', 'images/spritesheets/Candy.png', 'images/spritesheets/Candy.xml');
		this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
        this.load.image('cor', 'images/Correct.png');
		this.load.image('wro', 'images/wrongbox.png');
        this.load.image('titlescreen', 'images/titleBG.png');
        this.load.image('BG', 'images/BG.png');
		this.load.image('toothmanBG', 'images/toothmanBG.png');
		this.load.image('toothmanInstructionsBG', 'images/toothmanInstructionsBG.png');
		this.load.image('toothmanTitle', 'images/toothmanTitle.png');
        this.load.image('go', 'images/go.png');
        this.load.image('next', 'images/next.png');
        this.load.image('question', 'images/question.png');
        this.load.image('answer', 'images/answer.png');
        this.load.image('explosion', 'images/explosion.png');
        this.load.image('ghost', 'images/ghost.png');
		this.load.image('audio', 'images/audio.png');
		
		this.load.image('apple', 'images/question/apple.png');
		this.load.image('banana', 'images/question/banana.png');
		this.load.image('choclate', 'images/question/choclate.png');
		this.load.image('clock', 'images/question/clock.png');
		this.load.image('cream', 'images/question/cream.png');
		this.load.image('food', 'images/question/food.png');
		this.load.image('football', 'images/question/football.png');
		this.load.image('icecream', 'images/question/icecream.png');
		this.load.image('netball', 'images/question/netball.png');
		this.load.image('run', 'images/question/run.png');
		this.load.image('sleep', 'images/question/sleep.png');
		this.load.image('sports', 'images/question/sports.png');
		this.load.image('sweets', 'images/question/sweets.png');
		this.load.image('tennis', 'images/question/tennis.png');
		this.load.image('tv', 'images/question/tv.png');
		
		this.load.audio('Instructions', 'audio/Instructions.m4a');
		this.load.audio('1', 'audio/1.m4a');
		this.load.audio('2', 'audio/2.m4a');
		this.load.audio('3', 'audio/3.m4a');
		this.load.audio('4', 'audio/4.m4a');
		this.load.audio('5', 'audio/5.m4a');
		this.load.audio('Hint1', 'audio/Hint1.m4a');
		this.load.audio('Hint2', 'audio/Hint2.m4a');
		this.load.audio('Hint3', 'audio/Hint3.m4a');
		this.load.audio('Hint4', 'audio/Hint4.m4a');
		this.load.audio('Hint5', 'audio/Hint5.m4a');
        this.load.audio('explosion_audio', 'audio/explosion.mp3');
        this.load.audio('hurt_audio', 'audio/hurt.mp3');
        this.load.audio('select_audio', 'audio/select.mp3');
        this.load.audio('game_audio', 'audio/bgm.m4a');
	},

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
        if(this.cache.isSoundDecoded('game_audio') && this.ready == false) {
            this.ready = true;
            this.state.start('StartMenu');
        }
	}
};