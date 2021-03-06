HealthyLiving.BonusGame = function(game) {
	this.totalTootmen;
	this.toothmanGroup;
	this.totalCandy;
	this.candyGroup;
	this.burst;
	this.gameover;
	this.countdown;
	this.overmessage;
	this.secondsElapsed;
	this.timer;
	this.music;
	this.ouch;
	this.boom;
	this.ding;
	
	};
	
HealthyLiving.BonusGame.prototype = {
    
    create: function() {
		this.gameover = false;
		this.secondsElapsed = 0;
		this.timer = this.time.create(false);
		this.timer.loop(1000, this.updateSeconds, this);
		this.totalTootmen = 20;
		this.totalCandy = 13;
		this.buildBonusWorld();	
		
		this.music = this.add.audio('game_audio');
		this.music.play('', 0, 0.3, true);   //marker, position, volume, loop
		this.ouch = this.add.audio('hurt_audio');
		this.boom = this.add.audio('explosion_audio');
		this.ding = this.add.audio('select_audio');

		},
		
	updateSeconds: function() {
		this.secondsElapsed++;
},
		
	buildBonusWorld: function() {
		this.add.image(0, 0, 'toothmanBG');
		this.buildToothmen();
		this.buildCandyballs();
		this.buildEmitter();
		this.countdown = this.add.bitmapText(10, 10, 'eightbitwonder', 'Candymen Left ' + this.totalTootmen, 20);
		this.timer.start();
			},
			
    buildToothmen: function() {
		this.toothmanGroup = this.add.group();
        this.toothmanGroup.enableBody = true;
        for(var i=0; i<this.totalTootmen; i++) {
            var b = this.toothmanGroup.create(this.rnd.integerInRange(-10, this.world.width-50), this.rnd.integerInRange(this.world.height-180, this.world.height-60), 'toothman', 'ToothMan0000');
            b.anchor.setTo(0.5, 0.5);
            b.body.moves = false;
            b.animations.add('Rest', this.game.math.numberArray(1,58));
            b.animations.add('Walk', this.game.math.numberArray(68,107));
            b.animations.play('Rest', 24, true);
			this.assignTootmanMovement(b);
        }
		},
		
	assignTootmanMovement: function(b) {
        bposition = Math.floor(this.rnd.realInRange(50, this.world.width-50));
        bdelay = this.rnd.integerInRange(2000, 6000);
        if(bposition < b.x){
            b.scale.x = 1;
        }else{
            b.scale.x = -1;
        }
        t = this.add.tween(b).to({x:bposition}, 3500, Phaser.Easing.Quadratic.InOut, true, bdelay);
        t.onStart.add(this.startToothman, this);
        t.onComplete.add(this.stopToothman, this);
    },
	
	startToothman: function(b) {
        b.animations.stop('Rest');
        b.animations.play('Walk', 24, true);
    },
    
    stopToothman: function(b) {
        b.animations.stop('Walk');
        b.animations.play('Rest', 24, true);
        this.assignTootmanMovement(b);
    },
	
	buildCandyballs: function() {
		this.candyGroup = this.add.group();
        for(var i=0; i<this.totalCandy; i++) {
            var r = this.candyGroup.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), 'candy', 'SpaceRock0000');
            var scale = this.rnd.realInRange(0.3, 1.0);
            r.scale.x = scale;
            r.scale.y = scale;
            this.physics.enable(r, Phaser.Physics.ARCADE);
            r.enableBody = true;
            r.body.velocity.y = this.rnd.integerInRange(200, 400);
            r.animations.add('Fall');
            r.animations.play('Fall', 24, true);
		    r.checkWorldBounds = true;
            r.events.onOutOfBounds.add(this.resetBall, this);
        }
    },
    
    resetBall: function(r) {
        if(r.y > this.world.height) {
            this.respawnBall(r);   
        }
    },
    
    respawnBall: function(r) {
		if(this.gameover == false){
        r.reset(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0));
        r.body.velocity.y = this.rnd.integerInRange(200, 400);
		}
    },	
	
	buildEmitter:function() {
    	this.burst = this.add.emitter(0, 0, 80);
    	this.burst.minParticleScale = 0.3;
    	this.burst.maxParticleScale = 1.2;
    	this.burst.minParticleSpeed.setTo(-30, 30);
    	this.burst.maxParticleSpeed.setTo(30, -30);
    	this.burst.makeParticles('explosion');
    	this.input.onDown.add(this.fireBurst, this);
},

	fireBurst: function(pointer) {
		if(this.gameover == false){
			this.boom.play();
			this.boom.volume = 0.2;
    		this.burst.emitX = pointer.x;
    		this.burst.emitY = pointer.y;
    		this.burst.start(true, 2000, null, 20); //(explode, lifespan, frequency, quantity)
		}
},
	burstCollision: function(r, b) {
	    this.respawnBall(r);
},
	toothmanCollision: function(r, b) {
    if(b.exists){
		this.ouch.play();
        this.respawnBall(r);
		this.makeGhost(b);
        b.kill();
        this.totalTootmen--;
        this.checkToothmenLeft();
    }
},

	friendlyFire: function(b, e) {
    	if(b.exists){
			this.ouch.play();
			this.makeGhost(b);
    	    b.kill();
    	    this.totalTootmen--;
    	    this.checkToothmenLeft();
    }
},

	checkToothmenLeft: function() {
  	  if(this.totalTootmen <= 0){
        this.gameover = true;
		this.music.stop();
		this.countdown.setText('Toothmen Left 0');
		this.overmessage = this.add.bitmapText(this.world.centerX-180, this.world.centerY-40, 'eightbitwonder', 'GAME OVER\n\n' + this.secondsElapsed, 42);
		this.overmessage.align = "center";
		this.overmessage.inputEnabled = true;
		this.overmessage.events.onInputDown.addOnce(this.quitGame, this);
    }else{
		this.countdown.setText('Toothmen Left ' + this.totalTootmen);
		};
},

makeGhost: function(b) {
    toothmanghost = this.add.sprite(b.x-20, b.y-180, 'ghost');
    toothmanghost.anchor.setTo(0.5, 0.5);
    toothmanghost.scale.x = b.scale.x
    this.physics.enable(toothmanghost, Phaser.Physics.ARCADE);
    toothmanghost.enableBody = true;
    toothmanghost.checkWorldBounds = true;
    toothmanghost.body.velocity.y = -800;
},

quitGame: function(pointer) {
	this.ding.play();
    this.state.start('StartMenu');
}, 

    update: function() {
		this.physics.arcade.overlap(this.candyGroup, this.burst, this.burstCollision, null, this);
		this.physics.arcade.overlap(this.candyGroup, this.toothmanGroup, this.toothmanCollision, null, this);
		this.physics.arcade.overlap(this.toothmanGroup, this.burst, this.friendlyFire, null, this);
//(object1, object2, overlapCallback, processCallback, callbackContext)
		}
    
};