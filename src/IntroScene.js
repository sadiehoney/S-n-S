
BasicGame.IntroScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.IntroScene.prototype = {

	create: function () {
        
		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

        this.background = new ScaleBackground(this,'introbg');        
        this.ScoreBar = new ScoreBar(this, "Meet your character");
        
        this.character = this.add.sprite(this.game.camera.x + this.game.camera.width/2, 
                                         this.game.camera.y + this.game.camera.height/2, 'charChloe');
        this.character.anchor.set(0.5, 0.5);
        
        this.dialogGroup = this.game.add.group();

        this.btnGroup = this.game.add.group();
        var btnsaysmile = this.game.add.button(this.character.x, (this.character.y - 200), 'saysmile', this.chloeDialog,this);
        
        //btnsaysmile.setFrames(btPlaySelecionado, btPlay);
        btnsaysmile.anchor.set(0.5,0.5);
        this.btnGroup.add(btnsaysmile);
        
        var tween;
        tween = this.add.tween(btnsaysmile).to( { y: (this.character.y - 175) }, 2400, Phaser.Easing.Bounce.Out, true);
        tween.repeat(10);     

	},

	chloeDialog: function () {
        this.btnGroup.destroy(true,false);
    
            //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({
            dialog: "Hi! I'm Chloe. I'm in 7th grade.", charactername: "Chloe", characterimage: "charChloe", side: "left"});
        allthingstosay.push({
            dialog: "In this preview version of Sweet-n-Sour you are going to be me.", 
            charactername: "Chloe", characterimage: "charChloe", side: "right"});
        allthingstosay.push({
            dialog: "In the real game you'll get to choose your name, how you look, and what kinds of things you like to do.", 
            charactername: "Chloe", characterimage: "charChloe", side: "right"});
        allthingstosay.push({dialog: "Let's get started. Click on start game!", charactername: "Chloe", characterimage: "charChloe", side: "right"});
        var objchoices = [];
        objchoices.push({choicetxt: "Start Game!", choicedestination: this.startGame});

        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},

    update: function () {

		//	anthing that needs to fire on update

	},

	startGame: function () {
    
        this.ScoreBar.trackevent(this.key,'startGame');
        //	And start the actual game
        this.state.start('LetterScene');

	},

	gotoFeedback: function () {
        
        document.location.href = 'http://sweetnsourgame.com';
    


	}

};
