 
    HealthyLiving.Game = function(game) {

};

HealthyLiving.Game.prototype = {
    
    create: function() {
		       
        this.roundNumber = 1;
        
        this.music = this.add.audio('game_audio');
        this.music.play('', 0, 0.3, true);
    
        this.buildWorld();
    },

    
    buildWorld: function() {
        this.mainBG = this.add.image(0, 0, 'BG');
        this.questionNumber = this.add.text(10, 10, 'Question Number: ' + this.roundNumber, { font: "20px Arial", fill: "#ffffff", align: "left" });
        this.question();
        this.answer1();
        this.answer2();
        this.answer3();
        this.answer4();    
    },
    
    question: function() { 
        this.add.image(0,50, 'question'); 
        this.questionText(); 
    },
    
    questionText: function() {
        if(this.roundNumber == 1){
             this.questionLabel = this.add.text(55, 200, '<?php echo $quest[0];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
        }else if(this.roundNumber == 2){
           this.questionLabel = this.add.text(55, 200, '<?php echo $quest[1];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
       }else if(this.roundNumber == 3){
           this.questionLabel = this.add.text(55, 200, '<?php echo $quest[2];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
       };
    },
       
      answer1: function() {
        this.button1 = this.add.image(0,550, 'answer');
        this.button1.inputEnabled = true;
        if(this.roundNumber == 1){
           this.answer1Label = this.add.text(55, 600, '<?php echo $correct[0];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
                 this.button1.events.onInputDown.addOnce(this.correct, this);

        }else if(this.roundNumber == 2){
           this.answer1Label = this.add.text(55, 600, '<?php echo $wrong2[1];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
                this.button1.events.onInputDown.addOnce(this.wrong, this);
            
        }else if(this.roundNumber == 3){
           this.answer1Label = this.add.text(55, 600, '<?php echo $wrong1[2];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
                this.button1.events.onInputDown.addOnce(this.wrong, this);
        };
    },
    
    
    answer2: function() {
        this.button2 = this.add.image(0,750, 'answer');
                                this.button2.inputEnabled = true;
        if(this.roundNumber == 1){
           this.answer2Label = this.add.text(55, 800, '<?php echo $wrong1[0];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
               this.button2.events.onInputDown.addOnce(this.wrong, this);

        }else if(this.roundNumber == 2){
           this.answer2Label = this.add.text(55, 800, '<?php echo $wrong1[1];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
              this.button2.events.onInputDown.addOnce(this.wrong, this);

        }else if(this.roundNumber == 3){
           this.answer2Label = this.add.text(55, 800, '<?php echo $correct[2];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
              this.button2.events.onInputDown.addOnce(this.correct, this);
        };
    },
    
        answer3: function() {
        this.button3 = this.add.image(270,550, 'answer');
                                this.button3.inputEnabled = true;
         if(this.roundNumber == 1){
             this.answer3Label = this.add.text(300, 600, '<?php echo $wrong2[0];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
                this.button3.events.onInputDown.addOnce(this.wrong, this);

        }else if(this.roundNumber == 2){
           this.answer3Label = this.add.text(300, 600, '<?php echo $correct[1];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
                this.button3.events.onInputDown.addOnce(this.correct, this);

        }else if(this.roundNumber == 3){
           this.answer3Label = this.add.text(300, 600, '<?php echo $wrong2[2];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
                this.button3.events.onInputDown.addOnce(this.wrong, this);

        };
    },
    
        answer4: function() {
        	this.button4 = this.add.image(270,750, 'answer');
        	this.button4.inputEnabled = true;
         if(this.roundNumber == 1){
             this.answer4Label = this.add.text(300, 800, '<?php echo $wrong3[0];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
                this.button4.events.onInputDown.addOnce(this.wrong, this);

        }else if(this.roundNumber == 2){
           this.answer4Label = this.add.text(300, 800, '<?php echo $wrong3[1];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
                this.button4.events.onInputDown.addOnce(this.wrong, this);

        }else if(this.roundNumber == 3){
           this.answer4Label = this.add.text(300, 800, '<?php echo $wrong3[2];?>' , { font: "20px Arial", fill: "#000000", align: "left" });
                this.button4.events.onInputDown.addOnce(this.wrong, this);

        };
    },

    correct: function() {
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
		
			this.button1.kill();
			this.button2.kill();
			this.button3.kill();
			this.button4.kill();
			
       this.BG = this.add.image(0, 0, 'BG');
		this.BG = this.add.image(0, 0, 'wro');
		this.button5 = this.add.image(250, 800, 'next');
                      this.button5.inputEnabled = true;
	        this.button5.events.onInputDown.addOnce(this.updateRound, this);

    },
    
    updateRound: function() {
		this.BG.kill();
		this.button5.kill();
		if(this.roundNumber == 3){
			this.state.start('BonusGame');
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
	
    
};