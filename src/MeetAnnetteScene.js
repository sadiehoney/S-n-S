
BasicGame.MeetAnnetteScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.MeetAnnetteScene.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)
		this.music = this.add.audio('titleMusic');
		this.music.play();

        this.background = new ScaleBackground(this,'splashWalk');        
        
        this.ScoreBar = new ScoreBar(this,"Meet your guide");
        
        this.chloe = this.add.sprite(this.game.camera.x + (2 * this.game.camera.width/3), 
                                     this.game.camera.y + (this.game.camera.height/2), 'charChloe');
        this.chloe.anchor.set(0.5, 0.5);

        this.annette = this.add.sprite(this.game.camera.x + (this.game.camera.width/2), 
                                       this.game.camera.y + (this.game.camera.height/2), 'charAnnette');
        this.annette.anchor.set(0.5, 0.5);
        
        this.dialogGroup = this.game.add.group();

        this.btnGroup = this.game.add.group();
        this.btnsaysmile = this.game.add.button((this.annette.x + 20), (this.annette.y - 200), 'saysmile', this.annetteDialog,this);
        this.btnsaysmile.anchor.set(0.5,0.5);
        this.btnGroup.add(this.btnsaysmile);
        
        var tween;
        tween = this.add.tween(this.btnsaysmile).to( { y: (this.annette.y - 210) }, 1800, 
                                                    Phaser.Easing.Bounce.Out, true,0,-1,true);
        tween.repeat(10);        

	},

	annetteDialog: function () {
        this.btnGroup.destroy(true,false);
        
        this.ScoreBar.trackevent(this.key,'talktoAnnette');
        this.state.start('AnnetteTalkScene');
	}
};
