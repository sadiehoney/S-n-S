
BasicGame.AspenLunchroomScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.AspenLunchroomScene.prototype = {

	create: function () {
        
        //set flag that we spoke with Aspen in the lunchroom
        BasicGame.blspoketoaspenlunch = true;
        
        this.background = new ScaleBackground(this,'lunchroombg');   

        this.aspen = this.add.sprite(this.cameraX + (this.game.camera.width/3), 
                                       this.cameraY + (1.5 * this.game.camera.height/10), 'talkAspen');
        this.aspen.anchor.set(0.5, 0);

        //probably not needed
        this.dialogGroup = this.game.add.group();
        
        this.ScoreBar = new ScoreBar(this,"Meet someone new");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "Hi! Did you just start here? I just started 2 weeks ago!", 
                             charactername: "Aspen", characterimage: "charAspen", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Yes. I just started today. My name is Chloe, what's yours?", choicedestination: this.whatsyourname});
        objchoices.push({choicetxt: "Yeah", choicedestination: this.yeah});
        
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
        allthingstosay.push({dialog: "I'm Aspen. I hope we can be friends. It has been really hard to meet people here.", 
                             charactername: "Aspen", characterimage: "charAspen", side:"left"});
        allthingstosay.push({dialog: "What class do you have first? Maybe we can sit together or meet up later!", 
                             charactername: "Aspen", characterimage: "charAspen", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "I have English - what do you have?", 
                         choicedestination: this.ihaveenglishtoo});
        objchoices.push({choicetxt: "Oh, let's just see if we run into each other.", choicedestination: this.okseeyou});
    
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
        allthingstosay.push({dialog: "I'm Aspen. Do you need help finding a classroom or anything?", 
                             charactername: "Aspen", characterimage: "charAspen", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "I have English - what do you have?", 
                         choicedestination: this.ihaveenglishtoo});
        objchoices.push({choicetxt: "No, I'm good.  Thanks.", choicedestination: this.okseeyou});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},
    
    ihaveenglishtoo: function () {
        this.ScoreBar.trackevent(this.key,'ihaveenglishtoo');
        this.dialogGroup.destroy();
        this.ScoreBar.addscore(this,"High");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "I have English too!", 
                             charactername: "Aspen", characterimage: "charAspen", side:"left"});
        allthingstosay.push({dialog: "Meet me outside the lunchroom in 10 minutes!", 
                             charactername: "Aspen", characterimage: "charAspen", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Ok!", 
                         choicedestination: this.backtolunchroom});
    
        this.dialogarray = allthingstosay;
        this.choiceobject = objchoices;
        this.dialogkey = 0;
        this.Dialog = new Dialog(this); //need to pass the context

	},
    
    okseeyou: function () {
        this.ScoreBar.trackevent(this.key,'okseeyou');
        this.dialogGroup.destroy();
        this.ScoreBar.addscore(this,"Low");

        //create a dialog object with thingtosay, nameofcharacter, characterimage
        var allthingstosay = [];
        allthingstosay.push({dialog: "OK. Well let me know if you need anything.", 
                             charactername: "Aspen", characterimage: "charAspen", side:"left"});
        
        var objchoices = [];
        objchoices.push({choicetxt: "Ok", 
                         choicedestination: this.backtolunchroom});
        objchoices.push({choicetxt: "Ok. Thanks for your help!", 
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
