  var Dialog = function(callingcontext, btnOnly) {

    this.callingcontext = callingcontext;
    callingcontext.bottombuttonY = callingcontext.game.camera.y + callingcontext.game.camera.height/2;

    if (!btnOnly) {
        //need to know what state called this object
        this.saystuff();
    }
};

Dialog.prototype = Object.create(Phaser.Button.prototype);
Dialog.prototype.constructor = Dialog;
//Dialog.dialogkey = 100;

Dialog.prototype.saystuff = function() { 

    //NOT SURE WHERE TO PUT THE VARIABLES FOR THESE
    
    var callingContext = this.callingcontext;    
    var buttontxt = {};
    var buttonbg;

    //destroy the dialog group so they disappear as you progress
    
    if (callingContext.dialogGroup.exists && callingContext.dialogkey > 0 
        && callingContext.dialogkey - callingContext.dialogarray.length != 0){
        console.log("destroy dialogGroup");
        callingContext.dialogGroup.destroy();
    }


    //if there is something more to say, say it

    if (callingContext.dialogkey < callingContext.dialogarray.length) {
        var dialog = callingContext.dialogarray[callingContext.dialogkey].dialog;
        var charactername = callingContext.dialogarray[callingContext.dialogkey].charactername;
        var characterimage = callingContext.dialogarray[callingContext.dialogkey].characterimage;
        var characterside = callingContext.dialogarray[callingContext.dialogkey].side;
        this.PrintDialog(charactername,characterimage,characterside,dialog,callingContext);
    } else {
        for (var i=0; i < callingContext.choiceobject.length; i++) {
            this.PrintButtons(callingContext.choiceobject[i].choicetxt,callingContext.choiceobject[i].choicedestination,
                              i,callingContext);
        }
        //set the bottom button coordinate to the middle of the screen if we're done printing buttons
        callingContext.bottombuttonY = callingContext.game.camera.y + callingContext.game.camera.height/2;
    }
};
    
Dialog.prototype.PrintDialog = function (name,image,side,thingtosay,calledfromthiscontext) {

    //dialog background width is based on how big the scene background is
    var dialogbgwidth = (calledfromthiscontext.game.camera.width)/3; // 2*1/3 if we have it accross the whole screen

    var namestyle = {font: '30px Arial',fill: '#bebebe'};
    var dialogstyle = {font: '30px Arial',fill: '#000'};
// font: '30px Arial', 
    //create the name and dialog objects to see how long they are
    var nametxt = calledfromthiscontext.add.text(0, 0, name, namestyle);
    
    var dialogtxt = calledfromthiscontext.add.text(0, 0, thingtosay, dialogstyle);
    dialogtxt.wordWrap = true;
    dialogtxt.wordWrapWidth = dialogbgwidth;

    //dialog background height based on how much text there is
    var padding = dialogbgwidth/30;
    var dialogbgheight = (nametxt.height + dialogtxt.height) + 2*padding;
    dialogbgwidth = dialogbgwidth + 2*padding;
    
    calledfromthiscontext.dialogbutton = calledfromthiscontext.add.graphics(0,0);
    calledfromthiscontext.dialogbutton.lineStyle(2,0x000000, 1);
    calledfromthiscontext.dialogbutton.beginFill(0xFFFFFF);
    calledfromthiscontext.dialogbutton.drawRoundedRect(0,0, dialogbgwidth, dialogbgheight);
    calledfromthiscontext.dialogbutton.visible = false;

    var dialogbg = 
        calledfromthiscontext.add.button(
            calledfromthiscontext.game.camera.x + calledfromthiscontext.game.camera.width/2 - dialogbgwidth/2,
            calledfromthiscontext.game.camera.y + calledfromthiscontext.game.camera.height/2,
            calledfromthiscontext.dialogbutton.generateTexture(),this.saystuff,this); // 
    
    dialogbg.anchor.setTo(0.5,0);

    //set location of name and dialog text objects now that we've created the background
    nametxt.x = dialogbg.left + (1.5 * padding);
    nametxt.y = dialogbg.top + padding; 
    
    dialogtxt.x = dialogbg.left + (1.5 * padding);
    dialogtxt.y = nametxt.bottom;

     if (!calledfromthiscontext.dialogGroup.exists){
        calledfromthiscontext.dialogGroup = calledfromthiscontext.game.add.group();
         console.log("create dialogGroup");
    }
    calledfromthiscontext.dialogGroup.add(dialogbg);
    calledfromthiscontext.dialogGroup.add(nametxt);
    calledfromthiscontext.dialogGroup.add(dialogtxt);
    
    /* - taking this out since we have close ups now
    if (side == "right") {
        var charimage = calledfromthiscontext.add.sprite(dialogbg.right, dialogbg.top, image);
    } else {
        var charimage = calledfromthiscontext.add.sprite(dialogbg.left, dialogbg.top, image);
    }
    charimage.scale.setTo(.5,.5);
    charimage.anchor.setTo(0.5,0);
    calledfromthiscontext.dialogGroup.add(charimage);
    */
    
    calledfromthiscontext.dialogkey = calledfromthiscontext.dialogkey + 1;
    
};
    
Dialog.prototype.PrintButtons = function (choice,destination,thisbuttonnum,calledfromthiscontext) {
    
    //create the dialog background based on how big the scene background is
    var buttonbgwidth = calledfromthiscontext.game.camera.width/3;
    var buttonpadding = 15;
    
    var buttonstyle = { font: '30px Arial'};

    var buttontxt = calledfromthiscontext.add.text(0,0, choice, buttonstyle);
    buttontxt.anchor.setTo(0.5,0.5);
    buttonstyle.wordWrap = true;
    buttonstyle.wordWrapWidth = buttonbgwidth;
    
    var buttonbgheight = buttontxt.height * 1.2;

    var buttonXcoordinate = calledfromthiscontext.game.camera.x + 
        calledfromthiscontext.game.camera.width/2 + 
        buttonbgwidth/2;
    var buttonYcoordinate = calledfromthiscontext.bottombuttonY;
    if (thisbuttonnum > 0){
        buttonYcoordinate = buttonYcoordinate + buttonpadding;
    }

    calledfromthiscontext.button = calledfromthiscontext.add.graphics(0,0);
    calledfromthiscontext.button.lineStyle(2,0x000000, 1);
    calledfromthiscontext.button.beginFill(0x07cdf0);
    calledfromthiscontext.button.drawRoundedRect(0,0, buttonbgwidth, buttonbgheight);
    calledfromthiscontext.button.visible = false;

    var buttonbg = calledfromthiscontext.add.button(buttonXcoordinate,buttonYcoordinate,
                                                    calledfromthiscontext.button.generateTexture(),destination,calledfromthiscontext);  
    buttonbg.anchor.setTo(0.5,0);
    calledfromthiscontext.bottombuttonY = buttonbg.bottom; //set the bottom coordinate for the next button

    buttontxt.x = buttonXcoordinate;
    buttontxt.y = buttonbg.y + buttonbg.height/2;

    typeof someVar === 'undefined'
    if (typeof calledfromthiscontext.dialogGroup == 'undefined' 
        || !calledfromthiscontext.dialogGroup.exists){
        calledfromthiscontext.dialogGroup = calledfromthiscontext.game.add.group();
        console.log("create dialogGroup");
    }   
    
    calledfromthiscontext.dialogGroup.add(buttonbg);
    calledfromthiscontext.dialogGroup.add(buttontxt);
        
};
