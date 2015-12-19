
BasicGame.PerryLunchroomScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.PerryLunchroomScene.prototype = {

	create: function () {
        
        console.log("in PerryLunchroomScene");
        
        //set flag that we spoke with Perry in the lunchroom
        BasicGame.blspoketoperrylunch = true;

        this.background = new ScaleBackground(this,'lunchroombg');  
        
        this.ScoreBar = new ScoreBar(this,"Meet someone new");
        
        this.chloe = this.add.sprite(this.game.camera.x + (2 * this.game.camera.width/3), 
                                     this.game.camera.y + (this.game.camera.height/2), 'charChloe');
        this.chloe.anchor.set(0.5, 0.5);
        
        this.melanie = this.add.sprite(this.game.camera.x + (this.game.camera.width/3), 
                                       this.game.camera.y + (this.game.camera.height/2), 'charMelanie');
        this.melanie.anchor.set(0.5, 0.5);
        
        this.perry = this.add.sprite(this.game.camera.x + (this.game.camera.width/3 + 100), 
                                     this.game.camera.y + (this.game.camera.height/2), 'charPerry');
        this.perry.anchor.set(0.5, 0.5);
        
        this.aspen = this.add.sprite(this.game.camera.x + (this.game.camera.width/3 + 200), 
                                     this.game.camera.y + (this.game.camera.height/2), 'charAspen');
        this.aspen.anchor.set(0.5, 0.5);

        this.dialogGroup = this.game.add.group();

        //group for the say smile buttons
        this.btnGroup = this.game.add.group();

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "Can I help you? Do you need something?", charactername: "Perry", characterimage: "charPerry", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Hi! My name is Chloe. What's yours?", choicedestination: this.whatsyourname});
        objchoices.push({choicetxt: "No! I don't need anything. (How embarrassing!).", choicedestination: this.donewithperry});
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
        this.btnGroup.destroy();
        this.ScoreBar.addscore(this,"High");
        
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "I'm Perry.", charactername: "Perry", characterimage: "charPerry", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "So nice to meet you! Do you know where I can get something to drink?", 
                         choicedestination: this.nicetomeetyou});
        objchoices.push({choicetxt: "(Smile silently)", choicedestination: this.donewithperry});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context
 
    },

    nicetomeetyou: function () {
        this.ScoreBar.trackevent(this.key,'nicetomeetyou');
        this.btnGroup.destroy();
        this.ScoreBar.addscore(this,"High");
        
        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "If you're thirsty there are water and juice machines against that back wall.", 
                             charactername: "Perry", characterimage: "charPerry", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Which juice is best? Do you have a favorite?", 
                         choicedestination: this.perrygottago});
        objchoices.push({choicetxt: "(Smile silently)", choicedestination: this.donewithperry});
        
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

    },

    perrygottago: function () {
        this.ScoreBar.trackevent(this.key,'perrygottago');
        this.btnGroup.destroy();
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

        this.state.start('LunchroomScene');

    },
    
    backtolunchroom: function () {
        this.ScoreBar.trackevent(this.key,'backtolunchroom');
        this.btnGroup.destroy();
        this.state.start('LunchroomScene');

    },
    update: function () {

		//	Do some nice funky main menu effect here

	}

};