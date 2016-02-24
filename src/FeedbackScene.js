
BasicGame.FeedbackScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.FeedbackScene.prototype = {

	create: function () {
        
        //this.background = new ScaleBackground(this,'splashLogo');   
        this.game.stage.backgroundColor = "#FFFFFF";

        //play music at the end
        this.music = this.add.audio('titleMusic');
        this.music.play();
        
        this.btnGroup = this.game.add.group();
        
        //button style info
        this.buttonbgwidth = this.game.camera.width/2;
        this.buttonpadding = 15;
        this.buttonstyle = { font: '20px Arial'};
        this.buttonpaddingbtwn = this.game.height * .05;
        
        //feedback button text
        this.signuptxt = this.add.text(0,0,
                                      "Tell me when the full game is ready!!", this.buttonstyle);
        this.signuptxt.anchor.setTo(0.5,0.5);

        this.feedbacktxt = this.add.text(0,0,
                                      "I have some ideas to share", this.buttonstyle);
        this.feedbacktxt.anchor.setTo(0.5,0.5);
        
        this.playagaintxt = this.add.text(0,0,
                                      "I want to play again!", this.buttonstyle);
        this.playagaintxt.anchor.setTo(0.5,0.5);
        
        //figure out how big the buttons are based on the longest feedback button text
        this.buttonstyle.wordWrap = true;
        this.buttonstyle.wordWrapWidth = this.buttonbgwidth;
        this.buttonbgheight = this.signuptxt.height * 1.2;
        this.buttonpaddingbtwn = this.buttonbgheight/10;
        

        //create the graphic we'll use for the buttons
        var button = this.add.graphics(0,0);
        button.lineStyle(2,0x000000, 1);
        button.beginFill(0x07cdf0);
        button.drawRoundedRect(0,0, this.buttonbgwidth, this.buttonbgheight);
        button.visible = false;
        
        //create the buttons
        this.signupbutton = this.add.button(this.game.world.centerX,
                                                    this.game.world.centerY - button.height - this.buttonpaddingbtwn,
                                                    button.generateTexture(),
                                                    this.signup,this);  
        this.signupbutton.anchor.setTo(0.5,0.5);
        this.signuptxt.x = this.signupbutton.x;
        this.signuptxt.y = this.signupbutton.y;
        
        this.btnGroup.add(this.signupbutton);
        this.btnGroup.add(this.signuptxt);

        
        this.feedbackbutton = this.add.button(this.game.world.centerX,
                                                    this.game.world.centerY,
                                                    button.generateTexture(),
                                                    this.feedback,this);  
        this.feedbackbutton.anchor.setTo(0.5,0.5);
        this.feedbacktxt.x = this.feedbackbutton.x;
        this.feedbacktxt.y = this.feedbackbutton.y;
        
        this.btnGroup.add(this.feedbackbutton);
        this.btnGroup.add(this.feedbacktxt);

        this.playagainbutton = this.add.button(this.game.world.centerX,
                                                    this.game.world.centerY + button.height + this.buttonpaddingbtwn,
                                                    button.generateTexture(),
                                                    this.playagain,this);  
        this.playagainbutton.anchor.setTo(0.5,0.5);
        this.playagaintxt.x = this.playagainbutton.x;
        this.playagaintxt.y = this.playagainbutton.y;
        
        this.btnGroup.add(this.playagainbutton);
        this.btnGroup.add(this.playagaintxt);
        
        
        this.ScoreBar = new ScoreBar(this,"Tell us!");
        
        },

    signup: function () {
        this.ScoreBar.trackevent(this.key,'signup');
        this.btnGroup.destroy();
        document.location.href = signupURL;
    },
    feedback: function () {
        this.ScoreBar.trackevent(this.key,'shareIdeas');
        this.btnGroup.destroy();
        document.location.href = feedbackURL;
    },
    hated: function () {
        this.ScoreBar.trackevent(this.key,'hatedIt');
        this.btnGroup.destroy();
        document.location.href = feedbackURL;
    },
    playagain: function () {
        this.ScoreBar.trackevent(this.key,'playAgain');
        this.btnGroup.destroy();
        this.state.start('SplashScene');
    },
    
    update: function () {


	}

};
