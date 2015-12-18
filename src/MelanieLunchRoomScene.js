
BasicGame.MelanieLunchroomScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.MelanieLunchroomScene.prototype = {

	create: function () {
        
        //set flag that we spoke in the lunchroom
        BasicGame.blspoketomelanielunch = true;

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
        allthingstosay.push({dialog: "Hi - you're new, right?", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Hi! Yes, my name is Chloe. What's yours?", choicedestination: this.whatsyourname});
        objchoices.push({choicetxt: "Yeah", choicedestination: this.yeah});
        
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context
  
	},

	whatsyourname: function () {
        this.ScoreBar.trackevent(this.key,'whatsyourname');
        this.btnGroup.destroy();
        this.ScoreBar.addscore(this,"High");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "I'm Melanie. You're REALLY lucky you met me. I'll help you hang out with the right people. There are a LOT of losers here.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Oh... OK... I guess so", 
                         choicedestination: this.thatsfantastic});
        objchoices.push({choicetxt: "That's fantastic. I really want to know who the best people are.", choicedestination: this.thatsfantastic});
        objchoices.push({choicetxt: "Wow! That's rude! I think I'll make my own decisions, thank you.", choicedestination: this.thatsrude});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},

	yeah: function () {
        this.ScoreBar.trackevent(this.key,'yeah');
        this.btnGroup.destroy();
        this.ScoreBar.addscore(this,"Low");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "I'm Melanie. You're REALLY lucky you met me. I'll help you hang out with the right people. There are a LOT of losers here.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Oh... OK... I guess so", 
                         choicedestination: this.thatsfantastic});
        objchoices.push({choicetxt: "That's fantastic. I really want to know who the best people are.", choicedestination: this.thatsfantastic});
        objchoices.push({choicetxt: "Wow! That's rude! I think I'll make my own decisions, thank you.", choicedestination: this.thatsrude});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},
    
	thatsrude: function () {
        this.ScoreBar.trackevent(this.key,'thatsrude');
        this.btnGroup.destroy();
        this.ScoreBar.addscore(this,"Low");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "I think you just made your first decision.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        allthingstosay.push({dialog: "Don't be so rude.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "(Oops, talk to someone else.)", 
                         choicedestination: this.backtolunchroom});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},

    thatsfantastic: function () {
        this.ScoreBar.trackevent(this.key,'thatsfantastic');
        this.btnGroup.destroy();
        this.ScoreBar.addscore(this,"High");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "First we have to do something about the way you dress. That look is so last year.", 
                             charactername: "Melanie", characterimage: "charMelanie", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "I'm happy with my look. You can criticize someone else.", choicedestination: this.tryingtohelp});
        objchoices.push({choicetxt: "Oh... OK...", 
                         choicedestination: this.gottago});
        objchoices.push({choicetxt: "Thanks! I love your look.", choicedestination: this.gottago});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},
    tryingtohelp: function () {
        this.ScoreBar.trackevent(this.key,'tryingtohelp');
        this.btnGroup.destroy();
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
        this.btnGroup.destroy();
        this.ScoreBar.addscore(this,"High");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "(Checks phone.) Gotta go! My mom is picking me up for my orthodontist appointment. Ugh!", 
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
        this.btnGroup.destroy();
        this.state.start('LunchroomScene');

    },
    update: function () {

		//	Do some nice funky main menu effect here

	}

};
