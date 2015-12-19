var ScoreBar = function(callingcontext, goal) {

    //load the score sound
    callingcontext.scorebell = callingcontext.add.audio('scoreBell');

    //get the upper x,y of the camera
    x = callingcontext.game.camera.x;
    y = callingcontext.game.camera.y;

    callingcontext.scorebar = callingcontext.add.graphics(0,0);
    callingcontext.scorebar.lineStyle(2,0x000000, 1);
    callingcontext.scorebar.beginFill(0xFFFFFF);
    callingcontext.scorebar.drawRect(x, y, callingcontext.game.camera.width, callingcontext.game.camera.height/10);
        
    callingcontext.goaltext = callingcontext.game.add.text(x+20,
                                                           y + callingcontext.scorebar.height/2,"Goal: " + goal);
    callingcontext.goaltext.anchor.set(0,0.5);
    
    callingcontext.scoreheart = callingcontext.add.sprite(x + callingcontext.game.width/2,
                                                          y + callingcontext.scorebar.height/2,'heart');
    callingcontext.scoreheart.anchor.set(0.5,0.5);
    callingcontext.scoretext = callingcontext.add.text(x + callingcontext.game.width/2,
                                                       y + callingcontext.scorebar.height/2,BasicGame.score);
    callingcontext.scoretext.anchor.set(0.5,0.5);
    
    callingcontext.watermark = callingcontext.add.sprite((x + callingcontext.scorebar.width - 80),
                                                         y + callingcontext.scorebar.height/2,'watermark');
    callingcontext.watermark.anchor.set(0.5,0.5);
};

ScoreBar.prototype = Object.create(Phaser.Graphics.prototype);
ScoreBar.prototype.constructor = ScoreBar;
//Dialog.dialogkey = 100;

ScoreBar.prototype.addscore = function(callingcontext,LowMedHigh) { 

    var scoretoadd;
    var timebtweenadd;
    
    if (LowMedHigh == "Low"){
        console.log("in low");
        scoretoadd = 5;
    }

        if (LowMedHigh == "Med"){
            console.log("in Med");
            scoretoadd = 10;
    }

        if (LowMedHigh == "High"){
            console.log("in High");
            scoretoadd = 15;
    }
    timebtweenadd = 50;
    
    callingcontext.scorehearttween = 
        callingcontext.add.tween(callingcontext.scoreheart.scale).to( { x: 1.5, y: 1.5 }, 
                                                                     scoretoadd * timebtweenadd/5, 
                                                                     Phaser.Easing.Bounce.Out, true,0,scoretoadd/5,true);

    
    callingcontext.scorebell.play();
    //callingcontext.scoreheart
    callingcontext.game.time.events.repeat(timebtweenadd,scoretoadd,this.updatescoredisplay,callingcontext,callingcontext);
    
};

ScoreBar.prototype.updatescoredisplay = function(callingcontext) {
    console.log("in update score display");
    BasicGame.score = BasicGame.score + 1;
    callingcontext.scoretext.setText(BasicGame.score);
};
    
ScoreBar.prototype.trackevent = function(state,action) { 
    
    //google analytics code
    ga('send', {
        hitType: 'event',
        eventCategory: state, //game state (or scene)
        eventAction: action, //button clicked
        eventLabel: 'Phaser v1' //version of the game
    });
    
};


        
