
BasicGame.TestScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.TestScene.prototype = {

	create: function () {
        
		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

        this.background = new ScaleBackground(this,'introbg');        
        
        this.character = this.add.sprite(this.game.world.centerX - (this.game.camera.width/4), 
                                         this.game.world.centerY, 'talkChloe');
        this.character.scale.setTo(BasicGame.scaleofimages,BasicGame.scaleofimages);
        this.character.anchor.set(0.5, 0.15);
        
        this.ScoreBar = new ScoreBar(this, "Meet Chloe");
        
        this.btnGroup = this.game.add.group();
        var btnsaysmile = this.game.add.button(this.character.x, (this.character.top), 'saysmile', this.showChoices,this);
        btnsaysmile.scale.setTo(BasicGame.scaleofimages,BasicGame.scaleofimages);
        
        //btnsaysmile.setFrames(btPlaySelecionado, btPlay);
        btnsaysmile.anchor.set(0.5,0.5);
        this.btnGroup.add(btnsaysmile);
        
        var tween;
        tween = this.add.tween(btnsaysmile).to( { y: (this.character.top - btnsaysmile.height/5) }, 2400, Phaser.Easing.Bounce.Out, true);
        tween.repeat(10);     
        
        /* debug stuff */
        /*
        this.info = this.game.add.text(16, 100, ' ');
        this.info.font = "Courier";
        this.info.fontSize = 18;
        this.info.fill = "red";
        this.info.lineSpacing = 4;
//        this.info.setShadow(2, 2); */

	},

	showChoices: function () {
        
        this.btnGroup.destroy(true,false);
        
        this.dialogGroup = this.game.add.group();
    
            //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({
            dialog: "In the real game you'll get to choose your name, how you look, and what kinds of things you like to do.", 
            charactername: "Chloe", characterimage: "charChloe", side: "right"});
        var objchoices = [];
        objchoices.push({choicetxt: "I\'m excited to meet people!", choicedestination: this.create});
        objchoices.push({choicetxt: "I\'m excited to meet people!", choicedestination: this.create});
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},

    update: function () {

		//	scaling debug stuff
        /*
        var s = "Game size: " + this.game.width + " x " + this.game.height + "\n";
        s = s + "Actual size: " + this.game.scale.width + " x " + this.game.scale.height + "\n";
        s = s + "minWidth: " + this.game.scale.minWidth + " - minHeight: " + this.game.scale.minHeight + "\n";
        s = s + "maxWidth: " + this.game.scale.maxWidth + " - maxHeight: " + this.game.scale.maxHeight + "\n";
        s = s + "aspect ratio: " + this.game.scale.aspectRatio + "\n";
        s = s + "parent is window: " + this.game.scale.parentIsWindow + "\n";
        s = s + "bounds x: " + this.game.scale.bounds.x + " y: " + this.game.scale.bounds.y + "\n";
        s = s + "width: " + this.game.scale.bounds.width + "height: " + this.game.scale.bounds.height + "\n";
        s = s + "scalemode: " + this.game.scale.currentScaleMode;

	   this.info.text = s; */
	},

	gotoFeedback: function () {
        
        document.location.href = 'http://sweetnsourgame.com';
    


	}

};
