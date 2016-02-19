
BasicGame.MelanieLunchroomScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.MelanieLunchroomScene.prototype = {

	create: function () {
        
        //set flag that we spoke in the lunchroom
        BasicGame.blspoketomelanielunch = true;

        this.background = new ScaleBackground(this,'schooltalk');  
        
        this.melanie = this.add.sprite(this.game.world.centerX - (this.game.camera.width/4), 
                                         this.game.world.centerY, 'talkMelanie');
        this.melanie.scale.setTo(BasicGame.scaleofimages,BasicGame.scaleofimages);
        this.melanie.anchor.set(0.5, 0.25);

        this.dialogGroup = this.game.add.group();
        
        this.ScoreBar = new ScoreBar(this,"Meet someone new");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "Hi - you're new, right?", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Yes! I'm Chloe.", choicedestination: this.whatsyourname});
        objchoices.push({choicetxt: "Yeah.", choicedestination: this.yeah});
        
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context
  
	},

	whatsyourname: function () {
        this.ScoreBar.trackevent(this.key,'whatsyourname');
        this.dialogGroup.destroy();
        this.ScoreBar.addscore(this,"High");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "I'm Melanie.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        allthingstosay.push({dialog: "You're REALLY lucky you met me.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        allthingstosay.push({dialog: "I'll help you hang out with the right people.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        allthingstosay.push({dialog: "There are a LOT of losers here.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Oh... OK...", 
                         choicedestination: this.thatsfantastic});
        objchoices.push({choicetxt: "How rude! I make my own decisions.", choicedestination: this.thatsrude});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},

	yeah: function () {
        this.ScoreBar.trackevent(this.key,'yeah');
        this.dialogGroup.destroy();
        this.ScoreBar.addscore(this,"Low");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "I'm Melanie.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        allthingstosay.push({dialog: "You're REALLY lucky you met me.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        allthingstosay.push({dialog: "I'll help you hang out with the right people.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        allthingstosay.push({dialog: "There are a LOT of losers here.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});

        
        var objchoices = [];
        objchoices.push({choicetxt: "Oh... OK...", 
                         choicedestination: this.thatsfantastic});
        objchoices.push({choicetxt: "How rude! I make my own decisions.", choicedestination: this.thatsrude});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},
    
	thatsrude: function () {
        this.ScoreBar.trackevent(this.key,'thatsrude');
        this.dialogGroup.destroy();
        this.ScoreBar.addscore(this,"Low");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "You just made your first decision.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        allthingstosay.push({dialog: "Don't be so rude.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Oh, sorry.", 
                         choicedestination: this.backtolunchroom});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},

    thatsfantastic: function () {
        this.ScoreBar.trackevent(this.key,'thatsfantastic');
        this.dialogGroup.destroy();
        this.ScoreBar.addscore(this,"High");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "First we have to do something about the way you dress.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        allthingstosay.push({dialog: "That look is so last year.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "I'm happy with my look.", choicedestination: this.tryingtohelp});
        objchoices.push({choicetxt: "Thanks! I love your look.", choicedestination: this.gottago});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},
    tryingtohelp: function () {
        this.ScoreBar.trackevent(this.key,'tryingtohelp');
        this.dialogGroup.destroy();
        this.ScoreBar.addscore(this,"Low");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "Just trying to help.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Yeah, sure.", 
                         choicedestination: this.backtolunchroom});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},
    gottago: function () {
        this.ScoreBar.trackevent(this.key,'gottago');
        this.dialogGroup.destroy();
        this.ScoreBar.addscore(this,"High");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "(Checks phone.) Gotta go!", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        allthingstosay.push({dialog: "My mom is picking me up for my orthodontist appointment.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "See you!", 
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
