
BasicGame.LunchroomScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.LunchroomScene.prototype = {

	create: function () {
        
        if (!BasicGame.blspoketoaspenlunch && !BasicGame.blspoketomelanielunch && !BasicGame.blspoketoperrylunch){
		  this.music = this.add.audio('titleMusic');
		  this.music.play();
        }

        console.log(BasicGame.score + "<-BasicGame.score");


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
        if (!BasicGame.blspoketomelanielunch) {
            this.btnmelaniesay = this.game.add.button((this.melanie.x), (this.melanie.y - 180), 'saysmile', 
                                                       this.melanieDialog,this);
            this.btnmelaniesay.anchor.set(0.5,0.5);
            this.tweenmelanie = this.add.tween(this.btnmelaniesay).to( { y:(this.btnmelaniesay.y + 10) }, 2200, 
                                                                      Phaser.Easing.Bounce.Out, true,0,-1,true);
            this.btnGroup.add(this.btnmelaniesay);
            }
        if (!BasicGame.blspoketoperrylunch) {
            this.btnperrysay = this.game.add.button((this.perry.x), (this.perry.y - 180), 'saysmile', 
                                                       this.perryDialog,this);
            this.btnperrysay.anchor.set(0.5,0.5);
            this.tweenperry = this.add.tween(this.btnperrysay).to( { y:(this.btnperrysay.y + 15) }, 2600, 
                                                                  Phaser.Easing.Bounce.Out,true,0,-1,true);
            this.btnGroup.add(this.btnperrysay);
        }
        if (!BasicGame.blspoketoaspenlunch) {
            this.btnaspensay = this.game.add.button((this.aspen.x), (this.aspen.y - 180), 'saysmile', 
                                                       this.aspenDialog,this);
            this.btnaspensay.anchor.set(0.5,0.5);
            this.tweenaspen = this.add.tween(this.btnaspensay).to( { y:(this.btnaspensay.y + 10) }, 2000, 
                                                                  Phaser.Easing.Bounce.Out,true,0,-1,true);             
            this.btnGroup.add(this.btnaspensay);
        }
        
	},

    perryDialog: function () {
        this.ScoreBar.trackevent(this.key,'perryDialog');
        this.btnGroup.destroy();
        this.state.start('PerryLunchroomScene');

    },
    aspenDialog: function () {
        this.ScoreBar.trackevent(this.key,'aspenDialog');
        this.btnGroup.destroy();
        this.state.start('AspenLunchroomScene');
    },
    melanieDialog: function () {
        this.ScoreBar.trackevent(this.key,'melanieDialog');
        this.btnGroup.destroy();
        this.state.start('MelanieLunchroomScene');
    },
    

    update: function () {

		//	Do some nice funky main menu effect here

	}

};
