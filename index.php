<?php
include('includes/connectionstring.php');
include('includes/selectstring.php');

?>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" sizes="196x196" href="../images/toothman.png">
	<title>Healthy Living</title>
    <script src="libs/phaser.js"></script>
    <script src="Boot.js"></script>
    <script src="Preloader.js"></script>
    <script src="StartMenu.js"></script>
    <script> 
    HealthyLiving.Game = function(game) {

};

HealthyLiving.Game.prototype = {
    
    create: function() {
		       
        this.roundNumber = 1;
		this.audio1 = this.add.audio('1');
		this.audio2 = this.add.audio('2');
		this.audio3 = this.add.audio('3');
		this.audio4 = this.add.audio('4');
		this.audio5 = this.add.audio('5');
		this.Hintaudio1 = this.add.audio('Hint1');
		this.Hintaudio2 = this.add.audio('Hint2');
		this.Hintaudio3 = this.add.audio('Hint3');
		this.Hintaudio4 = this.add.audio('Hint4');
		this.Hintaudio5 = this.add.audio('Hint5');
        this.ding = this.add.audio('select_audio');
        this.music = this.add.audio('game_audio');
        this.music.play('', 0, 0.1, true);
    
        this.buildWorld();
    },

	
    buildWorld: function() {
        this.mainBG = this.add.image(0, 0, 'BG');
        this.questionNumber = this.add.text(10, 10, 'Question Number: ' + this.roundNumber, { font: "20px Arial", fill: "#ffffff", align: "left" });
		this.audioBtn();
        this.question();
        this.answer1();
        this.answer2();
        this.answer3();
        this.answer4();    
    },
	
	audioBtn: function() {
		this.audio = this.add.image(400,-18, 'audio');
 
	},
    
    	audioBtn: function() {
		this.audio = this.add.image(400,-18, 'audio');
		this.audio.inputEnabled = true;
        if(this.roundNumber == 1){
 				 this.audio.events.onInputDown.addOnce(this.a<?php echo $questnumber[0];?>, this);

        }else if(this.roundNumber == 2){
                this.audio.events.onInputDown.addOnce(this.a<?php echo $questnumber[1];?>, this);
            
        }else if(this.roundNumber == 3){
                this.audio.events.onInputDown.addOnce(this.a<?php echo $questnumber[2];?>, this);
        };
	},
    
	a1: function() {
		this.audio1.play();
	},
	a2: function() {
		this.audio2.play();
	},
	a3: function() {
		this.audio3.play();
	},
	a4: function() {
		this.audio4.play();
	},
	a5: function() {
		this.audio5.play();
	},
    question: function() { 
        this.add.image(-8,60, 'question'); 
        this.questionText(); 
    },
    
    questionText: function() {
        if(this.roundNumber == 1){
             this.questionLabel = this.add.text(70, 110, '<?php echo $quest[0];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
        }else if(this.roundNumber == 2){
           this.questionLabel = this.add.text(70, 110, '<?php echo $quest[1];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
       }else if(this.roundNumber == 3){
           this.questionLabel = this.add.text(70, 110, '<?php echo $quest[2];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
       };
    },
       
      answer1: function() {
        this.button1 = this.add.image(-5,250, 'answer');
        this.button1.inputEnabled = true;
        if(this.roundNumber == 1){
           this.answer1Label = this.add.text(55, 300, '<?php echo $answer1[0];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		this.image = this.add.image(38, 320, '<?php echo $image1[0];?>');
 
				 this.button1.events.onInputDown.addOnce(this.<?php if($coranwloc[0] == 1) {echo "correct";} else {echo "wrong";};?>, this);

        }else if(this.roundNumber == 2){
           this.answer1Label = this.add.text(55, 300, '<?php echo $answer1[1];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		   this.image = this.add.image(38, 320, '<?php echo $image1[1];?>');
                this.button1.events.onInputDown.addOnce(this.<?php if($coranwloc[1] == 1) {echo "correct";} else {echo "wrong";};?>, this);
            
        }else if(this.roundNumber == 3){
           this.answer1Label = this.add.text(55, 300, '<?php echo $answer1[2];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		   this.image = this.add.image(38, 320, '<?php echo $image1[2];?>');
                this.button1.events.onInputDown.addOnce(this.<?php if($coranwloc[2] == 1) {echo "correct";} else {echo "wrong";};?>, this);
        };
    },
    
    
    answer2: function() {
        this.button2 = this.add.image(-5,600, 'answer');
                                this.button2.inputEnabled = true;
        if(this.roundNumber == 1){
           this.answer2Label = this.add.text(55, 650, '<?php echo $answer2[0];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		   this.image = this.add.image(38, 670, '<?php echo $image2[0];?>');
               this.button2.events.onInputDown.addOnce(this.<?php if($coranwloc[0] == 2) {echo "correct";} else {echo "wrong";};?>, this);

        }else if(this.roundNumber == 2){
           this.answer2Label = this.add.text(55, 650, '<?php echo $answer2[1];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		   this.image = this.add.image(38, 670, '<?php echo $image2[1];?>');
              this.button2.events.onInputDown.addOnce(this.<?php if($coranwloc[1] == 2) {echo "correct";} else {echo "wrong";};?>, this);

        }else if(this.roundNumber == 3){
           this.answer2Label = this.add.text(55, 650, '<?php echo $answer2[2];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		   this.image = this.add.image(38, 670, '<?php echo $image2[2];?>');
              this.button2.events.onInputDown.addOnce(this.<?php if($coranwloc[2] == 2) {echo "correct";} else {echo "wrong";};?>, this);
        };
    },
    
        answer3: function() {
        this.button3 = this.add.image(265,250, 'answer');
                                this.button3.inputEnabled = true;
         if(this.roundNumber == 1){
             this.answer3Label = this.add.text(310, 300, '<?php echo $answer3[0];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
			 this.image = this.add.image(310, 320, '<?php echo $image3[0];?>');
                this.button3.events.onInputDown.addOnce(this.<?php if($coranwloc[0] == 3) {echo "correct";} else {echo "wrong";};?>, this);

        }else if(this.roundNumber == 2){
           this.answer3Label = this.add.text(310, 300, '<?php echo $answer3[1];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		   this.image = this.add.image(310, 320, '<?php echo $image3[1];?>');
                this.button3.events.onInputDown.addOnce(this.<?php if($coranwloc[1] == 3) {echo "correct";} else {echo "wrong";};?>, this);

        }else if(this.roundNumber == 3){
           this.answer3Label = this.add.text(310, 300, '<?php echo $answer3[2];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		   this.image = this.add.image(310, 320, '<?php echo $image3[2];?>');
                this.button3.events.onInputDown.addOnce(this.<?php if($coranwloc[2] == 3) {echo "correct";} else {echo "wrong";};?>, this);

        };
    },
    
        answer4: function() {
        	this.button4 = this.add.image(265,600, 'answer');
        	this.button4.inputEnabled = true;
         if(this.roundNumber == 1){
             this.answer4Label = this.add.text(310, 650, '<?php echo $answer4[0];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
			 this.image = this.add.image(310, 670, '<?php echo $image4[0];?>');
                this.button4.events.onInputDown.addOnce(this.<?php if($coranwloc[0] == 4) {echo "correct";} else {echo "wrong";};?>, this);

        }else if(this.roundNumber == 2){
           this.answer4Label = this.add.text(310, 650, '<?php echo $answer4[1];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		   this.image = this.add.image(310, 670, '<?php echo $image4[1];?>');
                this.button4.events.onInputDown.addOnce(this.<?php if($coranwloc[1] == 4) {echo "correct";} else {echo "wrong";};?>, this);

        }else if(this.roundNumber == 3){
           this.answer4Label = this.add.text(310, 650, '<?php echo $answer4[2];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		   this.image = this.add.image(310, 670, '<?php echo $image4[2];?>');
                this.button4.events.onInputDown.addOnce(this.<?php if($coranwloc[2] == 4) {echo "correct";} else {echo "wrong";};?>, this);

        };
    },

    correct: function() {
		this.ding.play();
			this.button1.kill();
			this.button2.kill();
			this.button3.kill();
			this.button4.kill();

       this.BG = this.add.image(0, 0, 'BG');
        this.BG =this.add.image(0, 0, 'cor');
        this.button5 = this.add.image(250, 800, 'next');
        this.button5.inputEnabled = true;
	    this.button5.events.onInputDown.addOnce(this.updateRound, this);
    },
    
    wrong: function(pointer) {
		this.ding.play();
			this.button1.kill();
			this.button2.kill();
			this.button3.kill();
			this.button4.kill();
			
       this.BG = this.add.image(0, 0, 'BG');
		this.BG = this.add.image(0, 0, 'wro');
		this.Hintaudio = this.add.image(400,-18, 'audio');
		this.Hintaudio.inputEnabled = true;
		this.Hintaudio.events.onInputDown.addOnce(this.Hintaudioplay, this);
		
		if(this.roundNumber == 1){
		this.answer4Label = this.add.text(80, 400, '<?php echo $hint[0];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		}else if(this.roundNumber == 2){
			this.answer4Label = this.add.text(80, 400, '<?php echo $hint[1];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		}else if(this.roundNumber == 3){
			this.answer4Label = this.add.text(80, 400, '<?php echo $hint[2];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
		};
		this.button5 = this.add.image(250, 800, 'next');
                      this.button5.inputEnabled = true;
	        this.button5.events.onInputDown.addOnce(this.updateRound, this);

    },
	
	Hintaudioplay: function(){
		   if(this.roundNumber == 1){
 				 this.Hintaudio<?php echo $questnumber[0];?>.play();

        }else if(this.roundNumber == 2){
                this.Hintaudio<?php echo $questnumber[1];?>.play();
            
        }else if(this.roundNumber == 3){
                this.Hintaudio<?php echo $questnumber[2];?>.play();
        };
		
	},
    
    updateRound: function() {
		this.ding.play();
		this.BG.kill();
		this.button5.kill();
		if(this.roundNumber == 3){
			this.state.start('CandymantMenu');
		this.music.stop();
		this.overmessage = this.add.bitmapText(this.world.centerX-180, this.world.centerY-40, 'eightbitwonder', 'GAME OVER\n\n');
		this.overmessage.align = "center";
		this.overmessage.inputEnabled = true;
		this.overmessage.events.onInputDown.addOnce(this.quitG, this);
			}else{
		this.roundNumber++;
        this.questionNumber.text = 'Question Number: ' + this.roundNumber;   
        this.buildWorld();
			};
    },
    

    update: function() {
    } 
	
    
};</script>
<script src="CandymanMenu.js"></script>
<script src="BonusInstructions.js"></script>
<script src="BonusGame.js"></script>
	<style>
		body {
			padding: 0;
			margin: 0;
			background-color: #000000;
		}
	</style>
</head>
<body>
    <div id="gameContainer"></div>
    <script type="text/javascript">
        window.onload = function() {
            var game = new Phaser.Game(540, 960, Phaser.AUTO, 'gameContainer');
            game.state.add('Boot', HealthyLiving.Boot);
            game.state.add('Preloader', HealthyLiving.Preloader);
            game.state.add('StartMenu', HealthyLiving.StartMenu);
            game.state.add('Game', HealthyLiving.Game);
			game.state.add('CandymantMenu', HealthyLiving.CandymanMenu);
			game.state.add('BonusInstructions', HealthyLiving.BonusInstructions);
			game.state.add('BonusGame', HealthyLiving.BonusGame);
            game.state.start('Boot');
        }
    </script>
</body>
</html>