
BasicGame.LetterScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.LetterScene.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)
        
        console.log("in letterscene");

		this.music = this.add.audio('titleMusic');
		this.music.play();

        this.background = new ScaleBackground(this,'housebg');        
        this.ScoreBar = new ScoreBar(this,"Note from your Mom");
        
        //create a dialog group - so we can make it disapper when we want to
        this.dialogGroup = this.game.add.group();

        //create a button group that will always get destroyed when a choice is made
        this.btnGroup = this.game.add.group();
                
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "You wake up and find a note on the dining room table.", charactername: "", characterimage: ""});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Read the note", choicedestination: this.readNote});
        //objchoices.push({choicetxt: "button text2", choicedestination: this.play});

        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.callingcontext = this;
        this.dialogkey = 0;

        this.Dialog = new Dialog(this);

	},

	readNote: function () {
        this.btnGroup.destroy(true,false);
        
        this.ScoreBar.trackevent(this.key,'readNote');
    
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "Hi Sweetie - sorry that I missed you. I had to get to work early this morning.", charactername: "", characterimage: ""});
        allthingstosay.push({dialog: "Good luck on your first day! I know you are a little bit worried about it.", charactername: "", characterimage: ""});
        allthingstosay.push({dialog: "It's OK to be nervous. I think you'll do great.", charactername: "", characterimage: ""});
        allthingstosay.push({dialog: "Annette, the neighbor girl we met last week, will be by at 8 to pick you up and walk to school with you.", charactername: "", characterimage: ""});
        allthingstosay.push({dialog: "I hope you like her.", charactername: "", characterimage: ""});
        allthingstosay.push({dialog: "I know you would rather walk by yourself...", charactername: "", characterimage: ""});
        allthingstosay.push({dialog: "Maybe if you earn my trust I can let you do that in the future.", charactername: "", characterimage: ""});
        allthingstosay.push({dialog: "(If you earn my trust you might get a phone too...", charactername: "", characterimage: ""});
        allthingstosay.push({dialog: "(I can't wait to hear about your first day!)", charactername: "", characterimage: ""});
        allthingstosay.push({dialog: "Love, Mom", charactername: "", characterimage: ""});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Go outside to meet Annette", choicedestination: this.gotoWalkScene});
        //objchoices.push({choicetxt: "button text2", choicedestination: this.play});

        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this);

	},

    update: function () {

		//	Do some nice funky main menu effect here

	},

	gotoWalkScene: function (pointer) {
        
		//	And start the actual game
        this.ScoreBar.trackevent(this.key,'gotoWalkScene');
        this.state.start('MeetAnnetteScene');
		//this.start('Game');

	}

};
