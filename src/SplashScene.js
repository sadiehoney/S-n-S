
BasicGame.SplashScene = function (game) {

	this.music = null;
    
   
};

BasicGame.SplashScene.prototype = {

	create: function () {

        this.callingcontext = this;
        this.music = this.add.audio('titleMusic');
		this.music.play();

        //show the logo
        this.logo = new ScaleBackground(this,'splashLogo');
        
        console.log(this.music.isPlaying);

        if (this.music.isPlaying){
            //set a timer
            this.timer = this.game.time.create(true);
            this.timer.add(2000,this.splashSchool,this);
            this.timer.start();
        } else {
            //create a button - when you touch, music will start and time will run
            this.Dialog = new Dialog(this,true);
            this.Dialog.PrintButtons("Start",this.startMusic,0,this);
        }
        
	},

    startMusic: function () {
        //set a timer
        this.timer = this.game.time.create(true);
        this.timer.add(2000,this.splashSchool,this);
        this.timer.start();

	},
    splashSchool: function () {
        this.school = new ScaleBackground(this,'splashSchool');

        //set a timer
        this.timer.add(2000,this.gotoIntro,this);
        this.timer.start();

	},

    gotoIntro: function () {
        console.log("about to go to introscene");

        //start the intro scene
        this.state.start('IntroScene');
        
	},
    update: function () {

		//	Do some nice funky main menu effect here

	}

};
