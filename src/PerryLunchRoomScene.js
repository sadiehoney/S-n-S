
BasicGame.PerryLunchroomScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.PerryLunchroomScene.prototype = {

	create: function () {
        
        console.log("in PerryLunchroomScene");
        
        //set flag that we spoke with Perry in the lunchroom
        BasicGame.blspoketoperrylunch = true;

        this.background = new ScaleBackground(this,'schooltalk');
                
        this.perry = this.add.sprite(this.game.world.centerX - (this.game.camera.width/4), 
                                         this.game.world.centerY, 'talkPerry');
        this.perry.scale.setTo(BasicGame.scaleofimages,BasicGame.scaleofimages);
        this.perry.anchor.set(0.5, 0.25);
        
        //this.game.camera.focusOnXY(this.perry.x,this.perry.y);
        this.game.camera.focusOn(this.perry);
        
        this.ScoreBar = new ScoreBar(this,"Meet someone new");
        
        this.dialogGroup = this.game.add.group();

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "Can I help you?", 
                             charactername: "Perry", characterimage: "charPerry", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Hi! I'm Chloe.", 
                         choicedestination: this.whatsyourname});
        objchoices.push({choicetxt: "Um no!", 
                         choicedestination: this.donewithperry});
        //objchoices.push({choicetxt: "Third Choice", choicedestination: this.startGame});
        //objchoices.push({choicetxt: "Fourth Choice", choicedestination: this.startGame});
        //objchoices.push({choicetxt: "Fifth choice", choicedestination: this.startGame});
        
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context
  
	},

	donewithperry: function () {
        this.ScoreBar.trackevent(this.key,'donewithperry');
        this.ScoreBar.addscore(this,"Low");
        this.state.start('LunchroomScene');

	},
    
    whatsyourname: function () {
        this.ScoreBar.trackevent(this.key,'whatsyourname');
        this.dialogGroup.destroy();
        this.ScoreBar.addscore(this,"High");
        
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "I'm Perry.", 
                             charactername: "Perry", characterimage: "charPerry", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "So nice to meet you!", 
                         choicedestination: this.nicetomeetyou});
        objchoices.push({choicetxt: "(Smile silently)", 
                         choicedestination: this.donewithperry});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context
 
    },

    nicetomeetyou: function () {
        this.ScoreBar.trackevent(this.key,'nicetomeetyou');
        this.dialogGroup.destroy();
        this.ScoreBar.addscore(this,"High");
        
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "Are you thirsty?", 
                             charactername: "Perry", characterimage: "charPerry", side:"left"});
        allthingstosay.push({dialog: "There are water and juice machines over there.", 
                             charactername: "Perry", characterimage: "charPerry", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Are they any good?", 
                         choicedestination: this.perrygottago});
        objchoices.push({choicetxt: "(Smile silently)", choicedestination: this.donewithperry});
        
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

    },

    perrygottago: function () {
        this.ScoreBar.trackevent(this.key,'perrygottago');
        this.dialogGroup.destroy();
        this.ScoreBar.addscore(this,"High");
        
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "The mango juice is pretty good.", 
                             charactername: "Perry", characterimage: "charPerry", side:"left"});
        allthingstosay.push({dialog: "Well, I gotta go. See you around.", 
                             charactername: "Perry", characterimage: "charPerry", side:"left"});
        var objchoices = [];
        objchoices.push({choicetxt: "Ok. See you.", 
                         choicedestination: this.backtolunchroom});
        
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context


    },
    
    backtolunchroom: function () {
        this.ScoreBar.trackevent(this.key,'backtolunchroom');
        this.dialogGroup.destroy();
        this.state.start('LunchroomScene');

    },
    update: function () {

		//	Do some nice funky main menu effect here

	}

};
