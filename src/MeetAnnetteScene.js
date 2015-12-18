
BasicGame.MeetAnnetteScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.MeetAnnetteScene.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)
		this.music = this.add.audio('titleMusic');
		this.music.play();

        this.background = new ScaleBackground(this,'splashWalk');        
        
        this.ScoreBar = new ScoreBar(this,"Meet your guide");
        
        this.chloe = this.add.sprite(this.game.camera.x + (2 * this.game.camera.width/3), 
                                     this.game.camera.y + (this.game.camera.height/2), 'charChloe');
        this.chloe.anchor.set(0.5, 0.5);

        this.annette = this.add.sprite(this.game.camera.x + (this.game.camera.width/2), 
                                       this.game.camera.y + (this.game.camera.height/2), 'charAnnette');
        this.annette.anchor.set(0.5, 0.5);
        
        this.dialogGroup = this.game.add.group();

        this.btnGroup = this.game.add.group();
        this.btnsaysmile = this.game.add.button((this.annette.x + 20), (this.annette.y - 200), 'saysmile', this.annetteDialog,this);
        this.btnsaysmile.anchor.set(0.5,0.5);
        this.btnGroup.add(this.btnsaysmile);
        
        var tween;
        tween = this.add.tween(this.btnsaysmile).to( { y: (this.annette.y - 225) }, 2400, Phaser.Easing.Bounce.Out, true);
        tween.repeat(10);        

	},

	annetteDialog: function () {
        this.btnGroup.destroy(true,false);
        
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "Hi Chloe! Remember me? I'm Annette.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        allthingstosay.push({dialog: "Hi! Nice to see you again Annette.", charactername: "Chloe", characterimage: "charChloe", side:"right"});
        allthingstosay.push({dialog: "Nice to see you too.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        allthingstosay.push({dialog: "I'm in High School now, but I went to East Middle School last year. I know a lot of the people that are students there.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        allthingstosay.push({dialog: "A lot of people are going to want to meet you. We don't have very many new kids around here.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Oh good! I'm excited to meet people.", choicedestination: this.excitedToMeetPeople});
        objchoices.push({choicetxt: "Well, I have enough friends from my old school.", choicedestination: this.haveEnoughFriends});
        //objchoices.push({choicetxt: "Third Choice", choicedestination: this.startGame});
        //objchoices.push({choicetxt: "Fourth Choice", choicedestination: this.startGame});
        //objchoices.push({choicetxt: "Fifth choice", choicedestination: this.startGame});
        
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},
    
	excitedToMeetPeople: function () {

        this.btnGroup.destroy(true,false);
        this.ScoreBar.addscore(this,"High"); //
        this.ScoreBar.trackevent(this.key,'excitedToMeetPeople');
        
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "Great!", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        allthingstosay.push({dialog: "I moved right before I started Middle School too.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        allthingstosay.push({dialog: "Can I give you some advice?", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Yes, please!", choicedestination: this.yesAdvice});
        objchoices.push({choicetxt: "No thanks, I think I've got it.", choicedestination: this.noAdvice});
        
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

    },
    
    haveEnoughFriends: function () {
        
        this.btnGroup.destroy(true,false);
        this.ScoreBar.addscore(this,"Low");
        
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "Oh. Ok.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        allthingstosay.push({dialog: "I moved right before I started Middle School too.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        allthingstosay.push({dialog: "Can I give you some advice?", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Yes, please!", choicedestination: this.yesAdvice});
        objchoices.push({choicetxt: "No thanks, I think I've got it.", choicedestination: this.noAdvice});
        
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},

    yesAdvice: function () {
        
        this.btnGroup.destroy(true,false);
        this.ScoreBar.addscore(this,"High");
        this.ScoreBar.trackevent(this.key,'yesAdvice');

        
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "You probably miss your old friends. But it's important to be open to making new ones.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        allthingstosay.push({dialog: "Be true to yourself - and do what feels right to you.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        allthingstosay.push({dialog: "Give kids a chance though, sometimes people aren't who they seem to be.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        allthingstosay.push({dialog: "Good luck! I'll pick you up after school.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Go into the school", choicedestination: this.gointoSchool});
        
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},

        noAdvice: function () {
        this.btnGroup.destroy(true,false);
        this.ScoreBar.addscore(this,"Low");
        
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "OK... Suit yourself.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        allthingstosay.push({dialog: "Good luck! I'll pick you up after school.", charactername: "Annette", characterimage: "charAnnette", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Go into the school", choicedestination: this.gointoSchool});
        
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},

    update: function () {

		//	Do some nice funky main menu effect here

	},

	gointoSchool: function (pointer) {
        
		//	And start the actual game
        this.ScoreBar.trackevent(this.key,'gointoSchool');
        this.state.start('LunchroomScene');
		//this.start('Game');

	}

};
