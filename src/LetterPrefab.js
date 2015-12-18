var Dialog = function(game,objDialog, objChoices) {
    
    this.saystuff();
//    var dialogbutton = game.make.button(200, 400, 'dialogbg', this.saystuff, this);

    //property would go here?
//    dialogbutton.anchor.setTo(0.5,0.5);

//    return dialogbutton;

};

Dialog.prototype = Object.create(Phaser.Button.prototype);
Dialog.prototype.constructor = Dialog;
//Dialog.dialogkey = 100;

Dialog.prototype.saystuff = function() { 
    //kill the text and dialog background ojects in case they've been displayed before
    //NOT SURE WHERE TO PUT THE VARIABLES FOR THESE
    /*
    console.log("in saystuff");
    console.log("Dialogkey:");
    console.log(BasicGame.dialogkey);
    console.log("Dialogarray:");
    console.log(BasicGame.dialogarray);
    console.log("BasicGame:");
    console.log(BasicGame);
    console.log("this:");
    console.log(this);
    */
    
    var callingContext = BasicGame.callingcontext;    
    var buttontxt = {};
    var buttonbg;

    if (typeof dialogbg != "undefined") {
        dialogtxt.destroy();
        nametxt.destroy();
        charimage.kill();
        dialogbg.kill();
    }
    //if there is something more to say, say it

    
    if (BasicGame.dialogkey < BasicGame.dialogarray.length) {
        var dialog = BasicGame.dialogarray[BasicGame.dialogkey].dialog;
        var charactername = BasicGame.dialogarray[BasicGame.dialogkey].charactername;
        var characterimage = BasicGame.dialogarray[BasicGame.dialogkey].characterimage;
        this.PrintDialog(charactername,characterimage,dialog,callingContext);
    } else {
        var totalbuttons = BasicGame.choiceobject.length;
        for (var i=0; i < BasicGame.choiceobject.length; i++) {
            this.PrintButtons(BasicGame.choiceobject[i].choicetxt,BasicGame.choiceobject[i].choicedestination,totalbuttons,i,callingContext);
        }
    }
};
    
Dialog.prototype.PrintDialog = function (name,image,thingtosay,calledfromthiscontext) {
    
    var dialogbg = calledfromthiscontext.add.button(200,400,'dialogbg',this.saystuff,this); // is this "this" valid? what should it be?
    var charimage = calledfromthiscontext.add.sprite(560, 400, image);
    charimage.scale.setTo(.5,.5);
    var namestyle = {fill: '#bebebe'};
    var dialogstyle = { font: '20px Arial', fill: '#000', boundsAlignH: 'center', boundsAlignV: 'middle' };
    var nametxt = calledfromthiscontext.add.text(220, 410, name, namestyle);
    var dialogtxt = calledfromthiscontext.add.text(220, 460, thingtosay, dialogstyle);
    dialogtxt.wordWrap = true;
    dialogtxt.wordWrapWidth = 350;
    BasicGame.dialogkey = BasicGame.dialogkey + 1;
        
};
    
Dialog.prototype.PrintButtons = function (choice,destination,totalbuttons,thisbuttonnum,calledfromthiscontext) {
    var buttonstyle = { font: '20px Arial', fill: '#000', boundsAlignH: 'center', boundsAlignV: 'middle' };
    var buttonbg = calledfromthiscontext.add.button(calledfromthiscontext.world.centerX,calledfromthiscontext.world.centerY,'buttonbg',destination,this); //is this this valid?
    buttonbg.anchor.setTo(0.5,0.5);
    buttonbg.scale.setTo(2,1);
    var buttontxt = calledfromthiscontext.add.text(calledfromthiscontext.world.centerX,calledfromthiscontext.world.centerY, choice, buttonstyle);
    buttontxt.anchor.setTo(0.5,0.5);
    buttonstyle.wordWrap = true;
    buttonstyle.wordWrapWidth = 350;
};
