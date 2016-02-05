
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.preloadBar = this.add.sprite(this.game.camera.y + this.game.camera.width/2,
                                          this.game.camera.x + this.game.camera.height/2, 'preloaderBar');
        this.preloadBar.anchor.set(0.5, 0.5);

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
        
        //splash screens
        this.load.image('splashLogo', splashLogo);
        this.load.image('splashSchool', SplashSchool);

        //general stuff - used on many scenes
        this.load.audio('titleMusic', [SplashMusic,SplashMusicwav]);
        this.load.audio('scoreBell', [ScoreBell,ScoreBellwav]);
        this.load.audio('pencilSound', [PencilSound,PencilSoundwav]);
        
        this.load.image('watermark', watermark);
        this.load.image('saysmile', saySmileSprite);
        this.load.image('helperarrow', helperArrow);

        //intro scene
        this.load.image('introbg', screenIntroBackground);
        this.load.image('charChloe', chloeSprite);
        this.load.image('talkChloe',chloeTalk);
        this.load.image('heart', heartSprite);
        
        //letter scene
        this.load.image('housebg', splashHouse);
        this.load.image('letterbg', letterbg);
        
        //meet annette scene
        this.load.image('splashWalk', splashWalk);
        this.load.image('walkbackgroundClose',walkbackgroundClose);
        this.load.image('charAnnette',annetteSprite);
        this.load.image('talkAnnette',annettetalking);
        
        //lunchroom scene
        this.load.image('lunchroombg', LunchroomBackground);
        this.load.image('charAspen', aspenSprite);
        this.load.image('talkAspen', aspentalking);
        this.load.image('charMelanie', melanieSprite);
        this.load.image('talkMelanie', melanietalking);
        this.load.image('charPerry', perrySprite);
        this.load.image('talkPerry', perrytalking);

	},

	create: function () {

  

	},

	 update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('SplashScene');
            //this.state.start('MeetAnnetteScene');
		}

	} 

};
