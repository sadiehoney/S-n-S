
BasicGame.MeetAnnetteScene = function (game) {

	this.music = null;
//	this.playButton = null;

};

BasicGame.MeetAnnetteScene.prototype = {

	create: function () {

		this.music = this.add.audio('titleMusic');
		this.music.play();

        this.background = new ScaleBackground(this,'splashWalk');   
        
        this.annette = this.add.sprite(this.game.world.centerX - (this.game.camera.width/2.5), 
                                         this.game.world.centerY, 'talkAnnette');
        this.annette.scale.setTo(BasicGame.scaleofimages,BasicGame.scaleofimages);
        this.annette.anchor.set(0.5, 0.15);
        
        this.ScoreBar = new ScoreBar(this,"Meet your guide");
        
        this.dialogGroup = this.game.add.group();

        this.btnGroup = this.game.add.group();
        this.btnsaysmile = this.game.add.button(this.annette.x, (this.annette.top), 'saysmile', this.annetteDialog,this);
        this.btnsaysmile.anchor.set(0.5,0.5);
        this.btnsaysmile.scale.setTo(BasicGame.scaleofimages,BasicGame.scaleofimages);
        this.btnGroup.add(this.btnsaysmile);
        
        var tween;
        tween = this.add.tween(this.btnsaysmile).to( { y: (this.annette.top - this.btnsaysmile.height/5) }, 1800, 
                                                    Phaser.Easing.Bounce.Out, true,0,-1,true);
        tween.repeat(10);        

	},

	annetteDialog: function () {
        this.btnGroup.destroy(true,false);
        
        this.ScoreBar.trackevent(this.key,'talktoAnnette');
        this.state.start('AnnetteTalkScene');
	}
};
