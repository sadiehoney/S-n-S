
BasicGame.LunchroomScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.LunchroomScene.prototype = {

	create: function () {
        
        if (!BasicGame.blspoketoaspenlunch && !BasicGame.blspoketomelanielunch && !BasicGame.blspoketoperrylunch){
		  this.music = this.add.audio('titleMusic');
		  this.music.play();
        }

        console.log(BasicGame.score + "<-BasicGame.score");


        this.background = new ScaleBackground(this,'lunchroombg');        
        
        var charscale = .75;
        
        this.aspen = this.add.sprite(this.game.world.centerX, 
                                       this.game.world.centerY, 'talkAspen');
        this.aspen.anchor.set(0.5, 0.25);
        this.aspen.scale.setTo(BasicGame.scaleofimages * charscale,BasicGame.scaleofimages * charscale);

        this.melanie = this.add.sprite(this.aspen.x - this.aspen.width * .4, 
                                       this.game.world.centerY, 'talkMelanie');
        this.melanie.anchor.set(0.5, 0.25);
        this.melanie.scale.setTo(BasicGame.scaleofimages * charscale,BasicGame.scaleofimages * charscale);
        this.melanie.angle = 8;
        
        this.perry = this.add.sprite(this.aspen.x + this.aspen.width * .5, 
                                     this.game.world.centerY, 'talkPerry');
        this.perry.anchor.set(0.5, 0.15);
        this.perry.scale.setTo(BasicGame.scaleofimages * charscale,BasicGame.scaleofimages * charscale);
        

        this.ScoreBar = new ScoreBar(this,"Meet someone");
        
        this.dialogGroup = this.game.add.group();
        
        //for testing
        /*
        BasicGame.blspoketoaspenlunch = true;
        BasicGame.blspoketomelanielunch = true;
        BasicGame.blspoketoperrylunch = true;
        */

        if(BasicGame.blspoketoaspenlunch && BasicGame.blspoketomelanielunch && BasicGame.blspoketoperrylunch) {

            //play music at the end
            this.music = this.add.audio('titleMusic');
            this.music.play();
            
            //feedback and play again buttons
            var allthingstosay = [];
            var objchoices = [];
            objchoices.push({choicetxt: "Let me play the full game when it's ready", 
                             choicedestination: this.signup});
            objchoices.push({choicetxt: "I have some ideas to share", choicedestination: this.feedback});
            objchoices.push({choicetxt: "I hated this game", choicedestination: this.hated});
            objchoices.push({choicetxt: "Play Again", choicedestination: this.playagain});

            this.dialogarray = allthingstosay;
            this.choiceobject = objchoices;
            this.dialogkey = 0;
            this.Dialog = new Dialog(this); //need to pass the context

        }

        //group for the say smile buttons
        this.btnGroup = this.game.add.group();
        if (!BasicGame.blspoketomelanielunch) {
            this.btnmelaniesay = this.game.add.button((this.melanie.x), (this.melanie.top), 'saysmile', 
                                                       this.melanieDialog,this);
            this.btnmelaniesay.anchor.set(0.5,0.5);
            this.btnmelaniesay.scale.setTo(BasicGame.scaleofimages * charscale,BasicGame.scaleofimages * charscale);
            this.tweenmelanie = this.add.tween(this.btnmelaniesay).to( { y:(this.btnmelaniesay.top - this.btnmelaniesay.height/5) }, 2200, 
                                                                      Phaser.Easing.Bounce.Out, true,0,-1,true);
            this.btnGroup.add(this.btnmelaniesay);
            }
        
        if (!BasicGame.blspoketoperrylunch) {
            this.btnperrysay = this.game.add.button((this.perry.x), (this.perry.top), 'saysmile', 
                                                       this.perryDialog,this);
            this.btnperrysay.anchor.set(0.5,0.5);
            this.btnperrysay.scale.setTo(BasicGame.scaleofimages * charscale,BasicGame.scaleofimages * charscale);
            this.tweenperry = this.add.tween(this.btnperrysay).to( { y:(this.btnperrysay.top - this.btnperrysay.height/5) }, 2600, 
                                                                  Phaser.Easing.Bounce.Out,true,0,-1,true);
            this.btnGroup.add(this.btnperrysay);
        }
        
        if (!BasicGame.blspoketoaspenlunch) {
            this.btnaspensay = this.game.add.button((this.aspen.x), (this.aspen.top), 'saysmile', 
                                                       this.aspenDialog,this);
            this.btnaspensay.anchor.set(0.5,0.5);
            this.btnaspensay.scale.setTo(BasicGame.scaleofimages * charscale,BasicGame.scaleofimages * charscale);
            this.tweenaspen = this.add.tween(this.btnaspensay).to( { y:(this.btnaspensay.top - this.btnaspensay.height/5) }, 2000, 
                                                                  Phaser.Easing.Bounce.Out,true,0,-1,true);             
            this.btnGroup.add(this.btnaspensay);
        }
        
	},

    perryDialog: function () {
        this.ScoreBar.trackevent(this.key,'perryDialog');
        this.btnGroup.destroy();
        this.state.start('PerryLunchroomScene');

    },
    aspenDialog: function () {
        this.ScoreBar.trackevent(this.key,'aspenDialog');
        this.btnGroup.destroy();
        this.state.start('AspenLunchroomScene');
    },
    melanieDialog: function () {
        this.ScoreBar.trackevent(this.key,'melanieDialog');
        this.btnGroup.destroy();
        this.state.start('MelanieLunchroomScene');
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

		//	Do some nice funky main menu effect here

	}

};
